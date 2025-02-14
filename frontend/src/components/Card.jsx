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

  const handleShowInfo = () =>{
    if(!isDelete && !isEdit){
      navigate(`/product/${product._id}`, {
        state: product
      })
    }
  }

const handleCart = async (e) => {
  e.stopPropagation()
  try {
    let res = await axios.post(`http://localhost:3000/api/cart/add`, {product: product._id, quantity: 1}, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    console.log(res.data)
    alert("Item Added to Cart")
  } catch (error) {
    console.log(error.message)
  }
}
  return (
    <StyledCard onClick={handleShowInfo}>
      <img
        src={`http://localhost:3000/uploads/${product.images[0]}`}
        alt="Product"
        className="cover"
      />
      <h1 className="title">{product.name}</h1>
      <p className="desc">{product.description}</p>
      <p className="price">$ {product.price}</p>
      <p className='category'>{product.category}</p>
      <div className="buttons">
      {!isEdit && <button onClick={handleCart} className="primary btn">Add to Cart</button>}
      {isEdit && <button onClick={handleEdit} className="primary btn">Edit</button>}
      {isDelete && <button onClick={handleDelete} className="primary btn del">Delete</button>}
      </div>
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
  border: 1px solid black;
  .category{
    background-color: #272727;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    border-radius:0 10px 0 10px;
    font-size: 14px;
  }
  .cover {
    width: 100%;
    height: 200px;
    object-fit: cover;
    padding: 10px;
    background-color: white;
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
    color: var(--font-color);
    margin: 10px 0;
  }
  .buttons{
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .primary.btn {
    background-color: var(--primary-color);
    color: var(--font-color);
    border: 1px solid black;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #06c44c; 
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
    border: 1px solid black;
    &:hover {
      background-color: #bf3535; 
    }
  }
`;


export default Card;