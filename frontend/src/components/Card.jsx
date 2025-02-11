import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Card = ({ product, isEdit, isDelete}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const handleEdit = () => {
    navigate('/edit', {
      state: product,
    });
  };

  const handleDelete = async  () =>{
    try {
      let res = await axios.delete(`http://localhost:3000/api/products/${product._id}`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      alert(res.data.message)
    } catch (error) {
      console.error("Server Error", error.message)
    }
  }

  return (
    <StyledCard>
      <img
        src={`http://localhost:3000/uploads/${product.images[0]}`}
        alt="Product"
        className="cover"
      />
      <h1 className="title">{product.name}</h1>
      <p className="desc">{product.description}</p>
      <p className="price">$ {product.price}</p>
      {!isEdit && <button className="primary btn">Add to Cart</button>}
      {isEdit && <button onClick={handleEdit} className="primary btn">Edit</button>}
      {isDelete && <button onClick={handleDelete} className="primary btn del">Delete</button>}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  position: relative;
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
  .primary.btn.del {
    background-color: #d73d3d;
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

const EditIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: var(--primary-color);
  cursor: pointer;
`;

export default Card;