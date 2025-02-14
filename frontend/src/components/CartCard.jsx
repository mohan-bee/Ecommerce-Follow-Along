import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CartCard = ({ product,setTotal }) => {
  const [quantity, setQuantity] = useState(product.quantity)

    const updateQuantity = async () => {
      try {
        let res = await axios.post('http://localhost:3000/api/cart/quantity', {product:product._id, quantity}, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        setTotal(product.price * quantity)
        console.log(res.data)
      } catch (error) {
        console.log("Server Error", error.message)
      }
    }

    useEffect(() => {
      updateQuantity()
    }, [quantity])

    const handleDeleteItem = async (id) => {
        try {
            let res = await axios.get(`http://localhost:3000/api/cart/delete/${id}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") },
            });
            
            console.log(res.data)
            alert(res.data.message)
        } catch (error) {
            console.log("Server Error", error.message)
        }
    }
  return (
    <CardContainer>
      <ImageContainer>
        <img
          src={`http://localhost:3000/uploads/${product.images[0]}`}
          alt={product.name}
        />
      </ImageContainer>
      <DetailsContainer>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <PriceInfo>
          ${product.price} x {quantity} ={' '}
          {(product.price * quantity).toFixed(2)}
        </PriceInfo>
        <Category>{product.category}</Category>
      </DetailsContainer>
      <QuantityContainer>
      <button onClick={() => setQuantity(prev => {
            if (prev > 1){
              return prev - 1
            }
            return prev
          })}>-</button>
          <p>{quantity}</p>
          <button onClick={() => setQuantity(prev => {
            if (prev >= product.stock){
                alert("Out Of Stock")
                return prev
            }   
            return prev + 1
        })}>+</button>
      </QuantityContainer>
      <DeleteButton onClick={() => handleDeleteItem(product._id)}>Delete</DeleteButton>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  font-family: 'Poppins', sans-serif;
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  img {
    width: 100px;
    height: auto;
    border-radius: 8px;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  margin: 0 20px;
  text-align: left;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const PriceInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const Category = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const DeleteButton = styled.button`
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;

  &:hover {
    background: #c0392b;
  }
`;

const QuantityContainer = styled.div`
  /* background-color: var(--accent-color); */
  display: flex;
  margin: 0 20px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  button{
    font-size: 20px;
    background-color: var(--accent-color);
    border-radius: 50%;
    border: none;
    width: 40px;
    height: 40px;
  }
`
export default CartCard;
