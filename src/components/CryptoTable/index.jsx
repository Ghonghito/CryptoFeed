import React, { useState, useEffect } from 'react'
import Alert from 'components/Alerts'
import { NavLink } from 'react-router-dom'
import { getCryptoData } from 'utils/API/CoinGeckoAPI'
/* import { Sparklines, SparklinesLine } from 'react-sparklines'; */

const Index = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    setIsLoading(true)
    const getCurrencies = await getCryptoData()
    setData(getCurrencies)
    setIsLoading(!isLoading)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {!isLoading ? (
        <div>
          {data.status === 200 ? (
            <div className='flex overflow-y-auto'>
              <table className='w-full max-w-7xl mx-auto px-4 sm:px-6 text-sm text-left'>
                <thead className='text-gray-500'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      #
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      ქოინი
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      ფასი
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      1სთ
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      24სთ
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      7დ
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      24სთ ნავაჭრი
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      კაპიტალიზაცია
                    </th>
                    {/* <th scope='col' className='px-6 py-3'>

                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((coin) => (
                    <tr key={coin.name} className='w-full cursor-pointer duratino-300 hover:bg-gray-200 dark:hover:bg-zinc-800'>
                      <th className='px-6 py-4'>
                        <p className='text-gray-500'>{coin.market_cap_rank}</p>
                      </th>
                      <th className='px-6 py-4 flex items-center gap-2'>
                        <img src={coin.image} alt='btc' className='w-5' />
                        <NavLink to={`/currency/${coin.id}`}>
                          <p className='font-bold duration-200 text-gray-700 dark:text-white/70'>{coin.name}</p>
                          <p className='font-bold duration-200 text-gray-700 dark:text-white/70 text-xs hidden md:flex'>{String(coin.symbol).toUpperCase()}</p>
                        </NavLink>
                      </th>
                      <th className='px-6 py-4'>
                        <p className='text-gray-500'>{coin.current_price < 0.001 ?
                          `$${Number(coin.current_price).toFixed(8)}`
                          :
                          `$${Number(coin.current_price).toLocaleString('en-US')}`}</p>
                      </th>
                      <th className='px-6 py-4'>
                        <p className={`${Number(coin.price_change_percentage_1h_in_currency) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {`${Number(coin.price_change_percentage_1h_in_currency).toFixed(2)}%`}
                        </p>
                      </th>
                      <th className='px-6 py-4'>
                        <p className={`${Number(coin.price_change_percentage_24h) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {`${Number(coin.price_change_percentage_24h).toFixed(2)}%`}
                        </p>
                      </th>
                      <th className='px-6 py-4'>
                        <p className={`${Number(coin.price_change_percentage_7d_in_currency) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {`${Number(coin.price_change_percentage_7d_in_currency).toFixed(2)}%`}
                        </p>
                      </th>
                      <th className='px-6 py-4'>
                        <p className='text-gray-500'>${Number(coin.total_volume).toLocaleString('en-US')}</p>
                      </th>
                      <th className='px-6 py-4'>
                        <p className='text-gray-500'>${Number(coin.market_cap).toLocaleString('en-US')}</p>
                      </th>
                      {/* <th className=''>
                        <Sparklines data={coin.sparkline_in_7d.price} svgWidth={135} svgHeight={50} width={135} height={50}>
                          <SparklinesLine color={Number(coin.price_change_percentage_7d_in_currency) > 0 ? 'green' : 'red'} />
                        </Sparklines>
                      </th> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          ) : (
            <div className='flex justify-center w-full mt-3'>
              <Alert variant='error' text='დაფიქსირდა შეცდომა! გთხოვთ ცადოთ თავიდან!' />
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Index