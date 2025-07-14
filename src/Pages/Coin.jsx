import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CoinContext } from '../Context/CoinContext';
import LineChart from '../Components/LineChart';

const Coin = () => {

  const {coinId} = useParams()
  const [coinData, setCoinData] = useState();
  const [graphData, setGraphData] = useState();
  const {currency} = useContext(CoinContext)

  const fetchGraphData = async () => {
    try {
      const rerGraph = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`);
      const grapData = await rerGraph.json();
      setGraphData(grapData);
    } catch (err) {
      console.error("Graph fetch failed", err);
    }
  }

  const fetchCoinData = async () => {
      const rer = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await rer.json();
      setCoinData(data);
   }
   
   useEffect(() => {
     console.log(coinData);
     console.log(graphData);
   }, [coinData,])

   useEffect(() => {
    fetchCoinData(); 
    fetchGraphData();
   }, [currency])

  return (
    <div className='CoinPage  w-[99vw] flex flex-col justify-center items-center mt-[20vh] h-auto'>
      {coinData ? (
        <div className='flex flex-col justify-center items-center'>
          
          <div>
              {/* Coin Image and Name */}
            <div className='w-[50vw] bg-violet-300/30 backdrop-blur-md rounded-xl shadow-lg text-white flex items-center p-3 mb-2'>
              <img src={coinData.image.small} alt={coinId} />
              <p className='ml-4 text-2xl font-semibold'>{coinData.name} ({coinData.symbol})</p>
            </div>

            {/* Chart */}
            <div className='coinChart w-[50vw]' >
              <LineChart graphData={graphData} />
          </div>
          </div>

          <div className="Coin w-[40vw] bg-violet-300/30 backdrop-blur-md rounded-xl shadow-lg mt-2 mb-5 p-4 text-white">
            <p className="text-lg font-semibold mb-2">
              Crypto Market Rank: <span className="font-normal">{coinData.market_cap_rank}</span>
            </p>
            <hr className="border-white/30 my-2" />
            <p className="text-lg font-semibold mb-2">
              Current Price: <span className="font-normal">{coinData.current_price}</span>
            </p>
            <hr className="border-white/30 my-2" />
            <p className="text-lg font-semibold mb-2">
              Market Cap: <span className="font-normal">{coinData.market_cap}</span>
            </p>
            <hr className="border-white/30 my-2" />
            <p className="text-lg font-semibold mb-2">
              24 Hour High: <span className="font-normal">{coinData.market_data.high_24h.symbol}</span>
            </p>
            <hr className="border-white/30 my-2" />
            <p className="text-lg font-semibold mb-2">
              24 Hour Low: <span className="font-normal">{coinData.low_24h}</span>
            </p>
          </div>

        </div>
      ) : (
        <p>loading..........</p>
      )}
    </div>
  )
}

export default Coin;