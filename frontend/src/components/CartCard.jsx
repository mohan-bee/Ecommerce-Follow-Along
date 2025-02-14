import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const CartCard = ({ product }) => {
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
          ${product.price} x {product.quantity} ={' '}
          {(product.price * product.quantity).toFixed(2)}
        </PriceInfo>
        <Category>{product.category}</Category>
      </DetailsContainer>
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

export default CartCard;
