import React, { useEffect, useState } from 'react'
import CoinInfoList from './components/Info/InfoList'
import SociaLinks from './components/SocialLinks'
import CoinInfoCard from './components/Info/InfoCard'
import Tag from 'components/Tags'
import Typography from 'components/Typography'
import LoadingLogo from 'components/LoadingLogo'
import Layout from 'components/Layout'
import PriceConverter from './components/PriceConverter'
import CryptoStatistics from './components/CryptoStatistics'
import StatisticsTab from './components/StatistictsTab'
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
    setData(getInfo)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [coinId])

  return (
    <div>
      <Layout className='mt-3'>
        {!isLoading ? (
          <div>
            {data.status === 200 ? (
              <div>
                <div className='md:flex'>
                  <div className='w-full md:w-[650px]'>
                    <div className='flex items-center gap-2'>
                      <img src={data.data.image.large} alt={data.data.name} className='w-11' />
                      <Typography className='text-xl'>{data.data.name}</Typography>
                      <Tag data={`${String(data.data.symbol).toUpperCase()}`} />
                    </div>
                    <div className='mt-3 w-full md:w-[450px]'>
                      <div className='flex items-start gap-2'>
                        <Tag data={`Rank #${data.data.market_data.market_cap_rank}`} />
                        {data.data.asset_platform_id !== null && (
                          <Tag data={`${data.data.asset_platform_id}`} />
                        )}
                      </div>
                    </div>
                    <div className='gap-2 py-2  md:hidden'>
                      <div className=''>
                        <Typography>{data.data.name}-ის ფასი</Typography>
                        <div>
                          <div className='flex justify-between items-center gap-3'>
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
                    <SociaLinks data={data.data.links} />
                    <div className='mt-3 w-full md:w-[400px]'>
                      <PriceConverter data={data.data.market_data} coinLogo={data.data.image.large} />
                    </div>
                    <div className='flex flex-col md:hidden w-full'>
                      <CoinInfoList
                        data={`$${Number(data.data.market_data.market_cap.usd).toLocaleString('en-US')}`}
                        name='კაპიტალიზაცია' />
                      <CoinInfoList
                        data={`$${Number(data.data.market_data.total_volume.usd).toLocaleString('en-US')}`}
                        name='ნავაჭრი' />
                      <CoinInfoList
                        data={`$${Number(data.data.market_data.fully_diluted_valuation.usd).toLocaleString('en-US')}`}
                        name='FDV' />
                      <CoinInfoList
                        data={`${Number(data.data.market_data.circulating_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                        name='ბრუნვაშია' />
                      <CoinInfoList
                        data={`${Number(data.data.market_data.max_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                        name='MAX SUPPLY' />
                      <CoinInfoList
                        data={`${Number(data.data.market_data.total_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                        name='TOTAL SUPPLY' />
                    </div>
                  </div>
                  <div className='gap-2 hidden md:flex md:w-full'>
                    <div className='w-full'>
                      <div>
                        <Typography>{data.data.name}-ის ფასი</Typography>
                        <div className='flex items-center gap-3'>
                          <p className='text-zinc-900 dark:text-white m text-3xl font-bold'>${Number(data.data.market_data.current_price.usd).toLocaleString('en-US')}</p>
                          <div className={`${data.data.market_data.price_change_percentage_24h > 0 ? 'bg-green-500' : 'bg-red-500'} px-3 py-1 rounded-lg`}>
                            <p className='text-white text-md font-bold text-sm'>
                              {Number(data.data.market_data.price_change_percentage_24h).toFixed(2)}%
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='border-[1px] mt-3 mb-3 duration-200 border-zinc-200 dark:border-zinc-800'></div>
                      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 w-full gap-2'>
                        <CoinInfoCard
                          name='კაპიტალიზაცია'
                          data={`$${Number(data.data.market_data.market_cap.usd).toLocaleString('en-US')}`}
                          percent={1.09}
                        />
                        <CoinInfoCard
                          name='ნავაჭრი'
                          data={`$${Number(data.data.market_data.total_volume.usd).toLocaleString('en-US')}`}
                        />
                        <CoinInfoCard
                          name='ბრუნვაშია'
                          data={`${Number(data.data.market_data.circulating_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                        />
                        <CoinInfoCard
                          name='Total Supply'
                          data={`${Number(data.data.market_data.total_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                        />
                        <CoinInfoCard
                          name='FDV'
                          data={`$${Number(data.data.market_data.fully_diluted_valuation.usd).toLocaleString('en-US')}`}
                        />
                        <CoinInfoCard
                          name='Max Supply'
                          data={`${Number(data.data.market_data.max_supply).toLocaleString('en-US')} ${String(data.data.symbol).toUpperCase()}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-[1px] mt-3 mb-3 duration-200 border-zinc-200 dark:border-zinc-800'></div>
                <div className='flex flex-col md:flex-row md:justify-between gap-2'>
                  <div className='w-full mt-3 mb-5'>
                    <div className=''>
                      <StatisticsTab data={data} />
                    </div>
                  </div>
                  <div>
                    <div className='w-full md:w-[350px] mt-3 mb-5'>
                      <CryptoStatistics data={data.data.market_data} symbol={String(data.data.symbol).toUpperCase()} />
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
      </Layout>
    </div>
  )
}

export default Index