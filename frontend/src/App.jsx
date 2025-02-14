import React, { useState } from 'react'
import Signup from './components/Signup'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import CreateProduct from './components/CreateProduct'
import MyProducts from './components/MyProducts'
import Edit from './components/Edit'
import ProductInfo from './components/ProductInfo'
import Cart from './components/Cart'
import Profile from './components/Profile'




const App = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/create' element={<CreateProduct />} />
      <Route path='/my-products' element={<MyProducts />} />
      <Route path='/edit' element={<Edit />} />
      <Route path='/product/:id' element={<ProductInfo />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />

    </Routes>
    </BrowserRouter>
  )
}


export default App

