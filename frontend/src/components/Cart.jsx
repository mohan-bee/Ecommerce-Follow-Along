import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import Navbar from './Navbar';

const Cart = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCartAndProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const cartResponse = await axios.get('http://localhost:3000/api/cart', {
        headers: { Authorization: "Bearer " + token },
      });
      const cart = cartResponse.data.cart;
      setCartItems(cart);


      if (!cart || !cart.products || cart.products.length === 0) {
        setProducts([]);
        setTotal(0);
        return;
      }


      const productPromises = cart.products.map(item =>
        axios.get(`http://localhost:3000/api/products/${item.product}`, {
          headers: { Authorization: "Bearer " + token },
        }).then(productRes => ({
          ...productRes.data.data,
          quantity: item.quantity,
        }))
      );

      const fetchedProducts = await Promise.all(productPromises);
      setProducts(fetchedProducts);

      const newTotal = fetchedProducts.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      setTotal(newTotal);

      const totalResponse = await axios.post(
        'http://localhost:3000/api/cart/total',
        { total: newTotal },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log("Total updated on server:", totalResponse.data.cart.total);
    } catch (error) {
      console.error("Error fetching cart or products:", error.message);
    }
  };

  useEffect(() => {
    fetchCartAndProducts();
  }, []);

  return (
    <div>
        <Navbar />
      {cartItems && (
        <div>
          <h2>Total: ${total.toFixed(2)}</h2>
          {products.map((product, index) => (
            <CartCard key={index} product={product} setTotal={setTotal}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
