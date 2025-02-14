import axios from 'axios'
import  { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import styled from 'styled-components'

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")

    const fetch = async () => {
        try {
            console.log("Fetching products for email:", email)
            console.log("Using token:", token)

            let res = await axios.get(`http://localhost:3000/api/products`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log("Response data:", res.data.data)
            const filteredData = res.data.data.filter((el) => el.email == email)
            console.log(filteredData)
            setProducts(filteredData)
        } catch (error) {
            console.error("Error fetching products:", error)
            alert("Failed to fetch products. Please check your authorization token.")
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>My Products</h1>
            <MyProductContainer>
            {products && products.map(product => (
                <Card key={product._id} product={product} isEdit={true} isDelete={true}/>
            ))}
            </MyProductContainer>
        </div>
    )
}

export default MyProducts


const MyProductContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`