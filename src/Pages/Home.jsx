import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../Context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {

  const {allCoins, currency} = useContext(CoinContext)
  const [displayCoins, setDisplayCoins] = useState([])
  const [input, setInput] = useState('')

  const inputHandler = (e) => {
    setInput(e.target.value)
    if(e.target.value === ""){
      setDisplayCoins(allCoins);
    }
  }

  const searchHandler = async (event) =>{
    event.preventDefault();
    const searchCoin = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoins(searchCoin);
  }

  useEffect(() =>{
    setDisplayCoins(allCoins);
  }, [allCoins])

  return (
    <div className='Home mt-[20vh] text-white text-center'>
      <div className='HeroSection text-center w-[80vw] mx-auto'>
          <h1 className='text-4xl font-bold'>Largest Crypto Market</h1>
          <h3 className='mt-2 '>Track real-time prices and trends for all major cryptocurrencies, all in one place. <br></br>Stay updated and make informed decisions with our easy-to-use crypto market platform.</h3>

          <form onSubmit={searchHandler}>
            <input onChange={inputHandler} value={input} type="text" list='coinList' placeholder='Search CryptoCoins'  className="bg-white/10 backdrop-blur-md text-[#fefeff] border border-[#8AC8E9] rounded-lg px-2 py-2 w-[20vw] mt-5 mr-4"/>


            <datalist id='coinList'>
              {allCoins.map((item, index) => (<option key={index} value={item.name}/>))}
            </datalist>

            <button type='submit' className='px-3 py-2 mr-8 rounded-lg border border-[#C4B5FD] bg-[#E9D5FF] text-[black] font-semibold hover:bg-[#4b006e4b] hover:text-white transition-colors duration-200'>Search</button>
          </form>
      </div>

        <div className="CryptoTable mt-[10vh] bg-white/20 backdrop-blur-md rounded-xl shadow-lg ">
          <div className="flex items-start py-4 px-4 text-2xl font-semibold border-b-1 border-b-[#8AC8E9oi99]">
            <p className='basis-[10%] text-center'>#</p>
            <p className='basis-[30%]'>Coins</p>
            <p className='basis-[20%]'>Price</p>
            <p className='basis-[20%]'>24-Hr Change</p>
            <p className='basis-[20%]'>Market Cap</p>
          </div>

          {
            Array.isArray(displayCoins) && displayCoins.slice(0, 10).map(coin => (
              <Link to={`/coin/${coin.id}`} className='IndividualCoin flex flex-row py-4 px-4  items-center border-b-1 border-b-blue-200 last:border-b-0  ' key={coin.id}>
                <p className='basis-[10%]'>{coin.market_cap_rank}</p>
                <div className='basis-[30%] flex items-center justify-center' >
                  <img src={coin.image} alt="" className='h-[100px]' />
                  <p className='ml-8 font-semibold text-xl'>{coin.name}</p>
                </div>
                <p className='basis-[20%]'>{currency.symbol}{coin.current_price.toLocaleString()}</p>
                <p className={`basis-[20%] font-semibold ${coin.price_change_24h > 0 ? 'text-green-300' : 'text-red-400'}`}>
                  {coin.price_change_24h}
                </p>
                <p className='basis-[20%]'>{currency.symbol} {coin.market_cap.toLocaleString()}</p>
              </Link >
            ))
          }

        </div>
      </div>
  )
}

export default Home;