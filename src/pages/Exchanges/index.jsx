import React, { useEffect, useState } from 'react'
import Typography from 'components/Typography'
import Alert from 'components/Alerts'
import LoadingLogo from 'components/LoadingLogo'
import Layout from 'components/Layout'
import { getExchanges } from 'utils/API/CryptoRankAPI'

const Index = () => {
  const [exchangesData, setExchangesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    setIsLoading(true)
    const data = await getExchanges()
    setExchangesData(data)
    setIsLoading(!isLoading)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <div className='text-sm text-left'>
        <div className='w-full py-2'>
          <Alert variant='info' text='ინფორმაცია აღებულია CryptoRank-დან.' />
        </div>
        {!isLoading ? (
          <div>
            {exchangesData.status === 200 ? (
              <div className='flex overflow-y-auto'>
                <table className='text-sm text-left w-full'>
                  <thead className='text-gray-500 duration-200 text-xs'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        #
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        სახელი
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        ნავაჭრი (24სთ)
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        წყვილი
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        ქვეყანა
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        დომინირება
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {exchangesData.data.map((x) => (
                      <tr key={x.key} className='w-full cursor-pointer duratino-300 hover:bg-gray-200 dark:hover:bg-zinc-800'>
                        <th className='px-6 py-4'>
                          <Typography className='font-bold'>{x.num}</Typography>
                        </th>
                        <th className='px-6 py-4 flex items-center gap-2'>
                          <div className='flex items-center gap-2'>
                            <img src={x.icon} alt={x.key} className='w-8' />
                            <Typography className='font-bold'>{x.name}</Typography>
                          </div>
                        </th>
                        <th className='px-6 py-4'>
                          <Typography className='font-bold'>${Number(x.volumes.day.toUSD).toLocaleString('en-US')}</Typography>
                        </th>
                        <th className='px-6 py-4'>
                          <Typography className='font-bold'>{x.pairsCount}</Typography>
                        </th>
                        <th className='px-6 py-4'>
                          <Typography className='font-bold'>{x.country}</Typography>
                        </th>
                        <th className='px-6 py-4'>
                          <Typography className='font-bold'>{Number(x.percentVolume).toFixed(2)}%</Typography>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        ) : (
          <div className='mt-3'>
            <LoadingLogo />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Index