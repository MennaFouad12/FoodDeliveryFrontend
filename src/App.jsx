import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from  'react-router-dom' 
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { Toaster } from "react-hot-toast";
import Verify from './pages/Verify/Verify'

const App = () => {
  return (
    <>
    <div className='app '>
      <Toaster position="top-right" />
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/verify' element={<Verify></Verify>}></Route>
    </Routes>
    </div>
    <Footer></Footer>

  
    </>
  )
}

export default App


