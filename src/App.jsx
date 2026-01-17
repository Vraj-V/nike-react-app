import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Contact from './Component/Contact'
import Location from './Component/Location'
import { Routes, Route } from 'react-router-dom'
import About from './Component/About'
import Footer from './Component/Footer'
import Not404 from './Component/Not404'
import Login from './Component/Login'
import Sign from './Component/Sign'
import Shop from './Component/Shop'
import Catergoies from './Component/Catergoies'

const App = () => {
  return (
    <div className='main'>
      <Navbar />
    <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/location' element={<Location />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/categories' element={<Catergoies />} />
        
        <Route path='*' element={<Not404 />} />
        </Routes>
    {/* <Footer /> */}
        </div>
  )
}

export default App