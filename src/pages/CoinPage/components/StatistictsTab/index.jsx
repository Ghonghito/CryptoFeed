import React, { useState, useEffect } from 'react'
import Alert from 'components/Alerts'
import LoadingLogo from 'components/LoadingLogo'
import Typography from 'components/Typography'
import Chart from './Chart'
import { Tab } from '@headlessui/react'
import { getMarkets } from 'utils/API/CoinGeckoAPI'

const Index = ({ data }) => {
  const [marketData, setMarketData] = useState([])
  const [isLoading, setIsLoading] = useState(Boolean)

  const current_market_data = data.data.market_data

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const getMarketsData = async () => {
    setIsLoading(true)
    const getData = await getMarkets(data.data.id)
    setMarketData(getData)
    setIsLoading(false)
  }

  const coinToUsd = (price, value) => {
    const result = Number(price) * Number(value)
    return result
  }

  useEffect(() => {
    getMarketsData()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Tab.Group>
        <Tab.List className='flex items-center duration-200 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-md gap-2'>
          <Tab className={({ selected }) =>
            classNames('rounded-lg p-2 text-sm font-medium text-zinc-900 dark:text-gray-400 focus:outline-none',
              selected
                ? 'duration-200 bg-blue-300 dark:bg-zinc-900 text-zinc-900'
                : 'text-zinc-900 dark:text-gray-400'
            )}>მიმოხილვა</Tab>
          <Tab className={({ selected }) =>
            classNames('rounded-lg p-2 text-sm font-medium text-zinc-900 dark:text-gray-400 focus:outline-none',
              selected
                ? 'duration-200 bg-blue-300 dark:bg-zinc-900 text-zinc-900'
                : 'text-zinc-900 dark:text-gray-400'
            )}>მარკეტი</Tab>
          <Tab className={({ selected }) =>
            classNames('rounded-lg p-2 text-sm font-medium text-zinc-900 dark:text-gray-400 focus:outline-none',
              selected
                ? 'duration-200 bg-blue-300 dark:bg-zinc-900 text-zinc-900'
                : 'text-zinc-900 dark:text-gray-400'
            )}>კონვერტერი</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className='mt-2'>
              <Chart id={data.data.id} />
              {data.status === 200 ? (
                <div className='flex flex-col overflow-y-auto rounded-lg mt-3'>
                  <table className='w-full max-w-7xl mx-auto px-4 sm:px-6 text-sm text-left'>
                    <thead className='text-gray-500 text-xs duration-200 bg-zinc-100 dark:bg-zinc-800'>
                      <tr>
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
                          14დ
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          30დ
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          1წ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='w-full cursor-pointer duratino-300 hover:bg-gray-200 dark:hover:bg-zinc-800'>
                        <th className='px-6 py-4 w-[150px]'>
                          <Typography color={`${current_market_data.price_change_percentage_1h_in_currency.usd > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {Number(current_market_data.price_change_percentage_1h_in_currency.usd).toLocaleString('en-us')}%
                          </Typography>
                        </th>
                        <th className='px-6 py-4 w-[150px]'>
                          <Typography color={`${current_market_data.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {Number(current_market_data.price_change_percentage_24h).toLocaleString('en-us')}%
                          </Typography>
                        </th>
                        <th className='px-6 py-4 w-[150px]'>
                          <Typography color={`${current_market_data.price_change_percentage_7d > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {Number(current_market_data.price_change_percentage_7d).toLocaleString('en-us')}%
                          </Typography>
                        </th>
                        <th className='px-6 py-4 w-[150px]'>
                          <Typography color={`${current_market_data.price_change_percentage_14d > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {Number(current_market_data.price_change_percentage_14d).toLocaleString('en-us')}%
                          </Typography>
                        </th>
                        <th className='px-6 py-4 w-[150px]'>
                          <Typography color={`${current_market_data.price_change_percentage_30d > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {Number(current_market_data.price_change_percentage_30d).toLocaleString('en-us')}%
                          </Typography>
                        </th>
                        <th className='px-6 py-4 w-[150px]'>
                          <Typography color={`${current_market_data.price_change_percentage_1y > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {Number(current_market_data.price_change_percentage_1y).toLocaleString('en-us')}%
                          </Typography>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className='flex justify-center w-full mt-3'>
                  <Alert variant='error' text='დაფიქსირდა შეცდომა! გთხოვთ ცადოთ თავიდან!' />
                </div>
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {!isLoading ? (
              <div>
                {marketData.status === 200 ? (
                  <div className='flex flex-col overflow-y-auto'>
                    <table className='w-full max-w-7xl mx-auto px-4 sm:px-6 text-sm text-left'>
                      <thead className='text-gray-500 text-xs'>
                        <tr>
                          <th scope='col' className='px-6 py-3'>
                            ბირჟა
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            წყვილი
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            ფასი
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            ნავაჭრი
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            სპრედი
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Trust Score
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {marketData.data.tickers.map((x, index) => (
                          <tr key={index} className='w-full cursor-pointer duratino-300 hover:bg-gray-200 dark:hover:bg-zinc-800'>
                            <th className='px-6 py-4 w-[150px]'>
                              <div className='flex items-center gap-2'>
                                <img src={x.market.logo} alt={x.name} className='w-8 rounded-full' />
                                <Typography>{x.market.name}</Typography>
                              </div>
                            </th>
                            <th className='px-6 py-4 w-[150px]'>
                              <Typography>{`${x.base}/${x.target}`}</Typography>
                            </th>
                            <th className='px-6 py-4 w-[150px]'>
                              <Typography>${Number(x.last).toLocaleString('en-US')}</Typography>
                            </th>
                            <th className='px-6 py-4 w-[150px]'>
                              <Typography>${Number(coinToUsd(x.last, x.volume)).toLocaleString('en-US')}</Typography>
                            </th>
                            <th className='px-6 py-4 w-[150px]'>
                              <Typography>{Number(x.bid_ask_spread_percentage).toLocaleString('en-US')}%</Typography>
                            </th>
                            <th className='px-6 py-4 w-[150px]'>
                              <div className={`bg-${x.trust_score}-500 w-[15px] h-[15px] rounded-full`}></div>
                            </th>
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
            ) : (
              <div>
                <LoadingLogo />
              </div>
            )}
          </Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Index