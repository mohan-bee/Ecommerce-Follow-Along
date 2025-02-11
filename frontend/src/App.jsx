import React from 'react'
import Signup from './components/Signup'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import CreateProduct from './components/CreateProduct'
import MyProducts from './components/MyProducts'
import Edit from './components/Edit'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/create' element={<CreateProduct />} />
      <Route path='/my-products' element={<MyProducts />} />
      <Route path='/edit' element={<Edit />} />
    </Routes>
    </BrowserRouter>
  )
}


export default App

