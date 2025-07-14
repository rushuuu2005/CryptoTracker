import React, { useContext } from 'react'
import logo from '../../src/assets/logo.png'
import {CoinContext} from '../Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (e) =>{
        switch (e.target.value){
            case "usd" :{
                setCurrency({name :"usd", symbol : "$"});
                break;
            }
            case "inr" :{
                setCurrency({name :"inr", symbol : "₹"});
                break;
            }
            case "eur" :{
                setCurrency({name :"eur", symbol : "€"});
                break;
            }
            default :{
                setCurrency({name: "usd", symbol : "$"});
                break;
            }
        }
    }
  return (
    <nav className=' Navbar bg-white/10 backdrop-blur-md text-[#fefeff] shadow-md px-4 py-2 fixed top-0 w-[80vw] mx-auto z-50 mt-8 border border-[#8AC8E9] rounded-[10px] flex justify-between items-center'>
        <div className='flex '>
            <Link to={'/'}>
                <img src={logo} alt="Logo" />
            </Link>
        </div>
        <div>
            <ul className='flex justify-center items-center '>
                <li><Link className='mx-2' to={'/'}>Home</Link></li>
                <li><Link className='mx-2' to={'/feature'}>Feature</Link></li>
                <li><Link className='mx-2' to={'/pricing'}>Pricing</Link></li>
                <li><Link className='mx-2' to={'/blog'}>Blog</Link></li>
            </ul>
        </div>

        <div>
            <select onChange={currencyHandler} className='px-2 py-1 mr-8 rounded-lg border border-[#8AC8E9]'>
                <option className='bg-blue-900' value="usd">USD</option>
                <option className='bg-blue-900' value="inr">INR</option>
                <option className='bg-blue-900' value="eur">Eur</option>
            </select>

            <button className=''>
                SignUp 
            </button>
        </div>
    </nav>
  )
}

export default Navbar;