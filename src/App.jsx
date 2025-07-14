import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className=" MainScreen min-h-screen bg-gradient-to-b from-blue-900 via-indigo-700 to-violet-600 flex flex-col justify-end  items-center">
        <div className='topElement'>
          <Navbar /> 
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/coin/:coinId' element={<Coin/>}/>
          </Routes>
        </div>
        <div className='footer'>
        <Footer /> 
        </div>
    </div>
  )
}

export default App