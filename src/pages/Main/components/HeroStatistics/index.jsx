import React, { useState, useEffect } from 'react';
import BigCard from 'components/Cards/BigCard'
import TrendingCoinsCard from 'components/Cards/TrendingCoinsCard'
import Typography from 'components/Typography'
import { getGlobalData, getTrendingCoins } from 'utils/API/CoinGeckoAPI';
import { formatNumber } from 'utils/Helpers'

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
      <div className='hidden md:flex mt-3'>
        <div className='w-full'>
          <div>
            {Number(data.status) === 200 ? (
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mb-3'>
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
        {data.status === 200 && (
          <Typography className='text-sm mb-3 w-full'>
            კრიპტოვალუტის გლობალური საბაზრო კაპიტალი დღეს<span className={`${Number(data.data.data.market_cap_change_percentage_24h_usd) > 0 ? 'text-green-500' : 'text-red-500'} mr-2 ml-2 font-bold`}>
              ${formatNumber(Number(data.data.data.total_market_cap.usd))}
            </span>დოლარია, რაც
            <span className={`${Number(data.data.data.market_cap_change_percentage_24h_usd) > 0 ? 'text-green-500' : 'text-red-500'} mr-2 ml-2 font-bold`}>
              {Number(data.data.data.market_cap_change_percentage_24h_usd).toLocaleString('en-US')}%
            </span>
            ცვლილებაა ბოლო 24 საათის განმავლობაში.
          </Typography>
        )}
        <div className='flex md:hidden items-center gap-2'>
          <div onClick={() => setShowStats(!showStats)} className={`${showStats ? 'bg-blue-600' : 'bg-zinc-500'} inline-flex h-6 w-11 items-center rounded-full`}>
            <div className={`${showStats ? 'translate-x-6' : 'translate-x-1'} h-4 w-4 transform rounded-full bg-white transition`}></div>
          </div>
          <Typography>სტატისტიკის ნახვა</Typography>
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
