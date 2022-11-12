import React, { useState, useEffect } from 'react';
import CryptoTable from 'components/CryptoTable'
import BigCard from 'components/Cards/BigCard'
import TrendingCoinsCard from 'components/Cards/TrendingCoinsCard'
import { getGlobalData, getTrendingCoins } from 'utils/API/CoinGeckoAPI';

function App() {
  const [data, setData] = useState([])
  const [trendingCoins, setTrendingCoins] = useState([])

  const getTrending = async () => {
    const trending = await getTrendingCoins()
    setTrendingCoins(trending)
  }

  const getData = async () => {
    const global = await getGlobalData()
    setData(global)
  }

  useEffect(() => {
    getData()
    getTrending()
  }, [])

  return (
    <div>
      {Number(data.status) === 200 ? (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-3'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
            <BigCard
              data={`$${Number(data.data.data.total_market_cap.usd).toLocaleString('en-US')}`}
              name='ბაზრის კაპიტალიზაცია'
              shadowColor={Number(data.data.data.market_cap_change_percentage_24h_usd.usd) > 0 ? 'green' : 'red'} />
            <BigCard
              data={`$${Number(data.data.data.total_volume.usd).toLocaleString('en-US')}`}
              name='ნავაჭრი 24სთ' />
            <BigCard
              data={`${Number(data.data.data.market_cap_percentage.btc).toFixed(3)}%`}
              name='BTC დომინირება' />
            <BigCard
              data={`${Number(data.data.data.market_cap_percentage.eth).toFixed(3)}%`}
              name='ETH დომინირება' />
          </div>
        </div>
      ) : null}
      {Number(trendingCoins.status) === 200 ? (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 mb-3'>
          <TrendingCoinsCard data={trendingCoins} />
        </div>
      ) : null}
      <CryptoTable />
    </div>
  );
}

export default App;
