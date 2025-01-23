import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledCard>
      <img
        src="https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg"
        alt="Product"
        className="cover"
      />
      <h1 className="title">Name of the Product</h1>
      <p className="desc">Description of the product and it is not sure now</p>
      <p className="price">$ 400</p>
      <button className="primary btn">Buy Now</button>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--secondary-color);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin: 20px auto;

  .cover {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 15px 0;
    color: var(--font-color);
  }

  .desc {
    font-size: 1rem;
    color: var(--font-color);
    opacity: 0.8;
    margin: 10px 20px;
  }

  .price {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary-color);
    margin: 10px 0;
  }

  .primary.btn {
    background-color: var(--primary-color);
    color: var(--background-color);
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #467968; 
    }
  }
`;

export default Card;
