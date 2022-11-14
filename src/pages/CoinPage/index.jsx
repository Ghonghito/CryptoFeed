import React, { useEffect, useState } from 'react'
import CoinInfo from './components/Info'
import Tag from 'components/Tags'
import Typography from 'components/Typography'
import LoadingLogo from 'components/LoadingLogo'
import { useLocation } from 'react-router-dom';
import { getCoinInfo } from 'utils/API/CoinGeckoAPI';

const Index = () => {
  const [data, setData] = useState([])
  const location = useLocation();
  const { pathname } = location;
  const coinId = pathname.split('/').slice(1)[1];
  const [isLoading, setIsLoading] = useState(Boolean)

  const getData = async () => {
    setIsLoading(true)
    const getInfo = await getCoinInfo(coinId)
    console.log(getInfo)
    setData(getInfo)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [coinId])

  return (
    <div>
      {!isLoading ? (
        <div>
          {data.status === 200 ? (
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 text-left mt-3'>
              <div className='md:flex'>
                <div>
                  <div className='flex items-center gap-2'>
                    <img src={data.data.image.large} alt={data.data.name} className='w-11' />
                    <Typography className='text-xl'>{data.data.name}</Typography>
                    <Tag data={`${String(data.data.symbol).toUpperCase()}`} />
                  </div>
                  <div className='gap-2 py-2 flex md:hidden'>
                    <div className=''>
                      <Typography>{data.data.name}-ის ფასი</Typography>
                      <div>
                        <div className='flex items-center gap-3'>
                          <p className='text-zinc-900 dark:text-white text-3xl font-bold'>${Number(data.data.market_data.current_price.usd).toLocaleString('en-US')}</p>
                          <div className={`${data.data.market_data.price_change_percentage_24h > 0 ? 'bg-green-500' : 'bg-red-500'} px-3 py-1 rounded-lg`}>
                            <p className='text-white text-md font-bold text-sm'>
                              {Number(data.data.market_data.price_change_percentage_24h).toFixed(2)}%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 w-full md:w-[450px]'>
                    <div className='flex items-start gap-2'>
                      <Tag data={`Rank #${data.data.market_data.market_cap_rank}`} />
                      {data.data.asset_platform_id !== null && (
                        <Tag data={`${data.data.asset_platform_id}`} />
                      )}
                    </div>
                  </div>
                  <div className='w-full md:w-[450px]'>
                    <CoinInfo
                      data={`$${Number(data.data.market_data.market_cap.usd).toLocaleString('en-US')}`}
                      name='კაპიტალიზაცია' />
                    <CoinInfo
                      data={`$${Number(data.data.market_data.total_volume.usd).toLocaleString('en-US')}`}
                      name='ნავაჭრი' />
                    <CoinInfo
                      data={`$${Number(data.data.market_data.fully_diluted_valuation.usd).toLocaleString('en-US')}`}
                      name='FDV' />
                    <CoinInfo
                      data={`${Number(data.data.market_data.circulating_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                      name='ბრუნვაშია' />
                    <CoinInfo
                      data={`${Number(data.data.market_data.max_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                      name='MAX SUPPLY' />
                    <CoinInfo
                      data={`${Number(data.data.market_data.total_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                      name='TOTAL SUPPLY' />
                  </div>
                </div>
                <div className='gap-2 hidden md:flex'>
                  <div className=''>
                    <Typography>{data.data.name}-ის ფასი</Typography>
                    <div>
                      <div className='flex items-center gap-3'>
                        <p className='text-zinc-900 dark:text-white m text-3xl font-bold'>${Number(data.data.market_data.current_price.usd).toLocaleString('en-US')}</p>
                        <div className={`${data.data.market_data.price_change_percentage_24h > 0 ? 'bg-green-500' : 'bg-red-500'} px-3 py-1 rounded-lg`}>
                          <p className='text-white text-md font-bold text-sm'>
                            {Number(data.data.market_data.price_change_percentage_24h).toFixed(2)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className='mt-12'>
          <LoadingLogo />
        </div>
      )}
    </div>
  )
}

export default Index