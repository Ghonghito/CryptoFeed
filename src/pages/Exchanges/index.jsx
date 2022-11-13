import React, { useEffect, useState } from 'react'
import { getExchanges } from 'utils/API/CryptoRankAPI'

const Index = () => {
  const [exchangesData, setExchangesData] = useState([])

  const getData = async () => {
    const data = await getExchanges()
    console.log(data)
    setExchangesData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {exchangesData.status === 200 ? (
        <div className='flex overflow-y-auto'>
          <table className='w-full max-w-7xl mx-auto px-4 sm:px-6 text-sm text-left'>
            <thead className='text-gray-500 duration-200'>
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
                    <p className='font-bold duration-200 text-gray-700 dark:text-white/70'>{x.num}</p>
                  </th>
                  <th className='px-6 py-4 flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                      <img src={x.icon} alt={x.key} className='w-8' />
                      <p className='font-bold duration-200 text-gray-700 dark:text-white/70'>{x.name}</p>
                    </div>
                  </th>
                  <th className='px-6 py-4'>
                    <p className='font-bold duration-200 text-gray-700 dark:text-white/70'>${Number(x.volumes.day.toUSD).toLocaleString('en-US')}</p>
                  </th>
                  <th className='px-6 py-4'>
                    <p className='font-bold duration-200 text-gray-700 dark:text-white/70'>{x.pairsCount}</p>
                  </th>
                  <th className='px-6 py-4'>
                    <p className='font-bold duration-200 text-gray-700 dark:text-white/70'>{x.country}</p>
                  </th>
                  <th className='px-6 py-4'>
                    <p className='font-bold duration-200 text-gray-700 dark:text-white/70'>{Number(x.percentVolume).toFixed(2)}%</p>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  )
}

export default Index