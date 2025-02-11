const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup =  async (req, res) =>{
    try {
    const {name, email, password} = req.body
    const file = req.file
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await User.findOne({email})

    const newUser = User({
        name, 
        email,
        password: hashedPassword,
        avatar: {
            public_id: name,
            url: file.filename
        }
       
    })
    if(existingUser){
        console.log("User Already Exists")
        return res.status(400).send("User Already Exists")
    }
    await newUser.save()
    console.log("User Created Successfully !!!")
    return res.status(200).send("User Created Successfully !!")
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message)
    }
}

 const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, msg: "Email and password are required." });
    }

    try {
        console.log("Searching for user with email:", email);

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            console.log("User not found for email:", email);
            return res.status(404).json({ success: false, msg: "Invalid email or password." });
        }

        console.log("User found:", user);
        
        const isAuthorisedUser = await bcrypt.compare(password, user.password);
        if (!isAuthorisedUser) {
            console.log("Password mismatch for email:", email);
            return res.status(401).json({ success: false, msg: "Invalid email or password." });
        }
        const token = await jwt.sign({_id: user._id, email: user.email},
            "secret",
            {expiresIn: "1h"}
        )
        console.log("User logged in successfully:", email);
        return res.status(200).json({success: true, msg: "User Logged In Sucessfully", token, user});

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ success: false, msg: "An error occurred during login. Please try again later." });
    }
}


module.exports = {signup, login}