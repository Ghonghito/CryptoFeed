import React, { useState, useEffect } from 'react';
import BigCard from 'components/Cards/BigCard'
import TrendingCoinsCard from 'components/Cards/TrendingCoinsCard'
import { getGlobalData, getTrendingCoins } from 'utils/API/CoinGeckoAPI';

function App() {
  const [data, setData] = useState([])
  const [trendingCoins, setTrendingCoins] = useState([])
  const [showStats, setShowStats] = useState(false)

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
      <div className='hidden md:flex'>
        <div>
          <div>
            {Number(data.status) === 200 ? (
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-3 mb-3'>
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
            ) : null}
          </div>
          <div>
            {Number(trendingCoins.status) === 200 ? (
              <div className='mt-3 mb-3'>
                <TrendingCoinsCard data={trendingCoins} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <div className='flex md:hidden items-center gap-2'>
          <div onClick={() => setShowStats(!showStats)} className={`${showStats ? 'bg-blue-600' : 'bg-zinc-500'} inline-flex h-6 w-11 items-center rounded-full`}>
            <div className={`${showStats ? 'translate-x-6' : 'translate-x-1'} h-4 w-4 transform rounded-full bg-white transition`}></div>
          </div>
          <p className='duration-200 text-zinc-900 dark:text-gray-400'>სტატისტიკის ნახვა</p>
        </div>
        {showStats && (
          <div>
            <div>
              {Number(data.status) === 200 ? (
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-3 mb-3'>
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
              ) : null}
            </div>
            <div>
              {Number(trendingCoins.status) === 200 ? (
                <div className='mt-3 mb-3'>
                  <TrendingCoinsCard data={trendingCoins} />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;