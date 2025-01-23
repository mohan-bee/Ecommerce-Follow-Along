const router = require('express').Router()
const { upload } = require('../config/multer')
const User = require('../modals/User')
const bcrypt = require('bcryptjs')

router.post('/create-user', upload.single('file'), async (req, res) =>{
    try {
    const {name, email, password} = req.body
    const file = req.file
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await User.findOne({email})
    console.log(file)
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
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password are required.");
    }

    try {
        console.log("Searching for user with email:", email);

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            console.log("User not found for email:", email);
            return res.status(404).send("Invalid email or password."); 
        }

        console.log("User found:", user);

        const isAuthorisedUser = await bcrypt.compare(password, user.password);
        if (!isAuthorisedUser) {
            console.log("Password mismatch for email:", email);
            return res.status(401).send("Invalid email or password."); 
        }

        console.log("User logged in successfully:", email);
        return res.status(200).send("Login Successful");

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).send("An error occurred during login. Please try again later.");
    }
});


module.exports = router