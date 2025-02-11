import React, { useEffect, useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import axios from 'axios'


const CardContainer = () => {
  const [products, setProducts] = useState([])
  const token = localStorage.getItem("token")
  const fetch = async () =>{
    let res = await axios.get('http://localhost:3000/api/products', {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  });
    setProducts(res.data.data)
    console.log(res.data.data)
  }

  useEffect(() =>{
    fetch()
  }, [])
  
  return (
    <StyledCardContainer>
      {products && products.map(product => (
        <Card key={product._id} product={product} isEdit={false} isDelete={false}/>
      ))}

    </StyledCardContainer>
  )
}

export default CardContainer

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`