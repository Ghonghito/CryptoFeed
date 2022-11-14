import React, { useState, useEffect } from 'react'
import Alert from 'components/Alerts'
import Typography from 'components/Typography'
import LoadingLogo from 'components/LoadingLogo'
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom'
import { getCryptoData } from 'utils/API/CoinGeckoAPI'
/* import { Sparklines, SparklinesLine } from 'react-sparklines'; */

const Index = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(Boolean)

  const getData = async (page) => {
    setIsLoading(true)
    const getCurrencies = await getCryptoData(page)
    console.log(getCurrencies)
    setData(getCurrencies)
    setIsLoading(false)
  }

  const changePage = ({ selected }) => {
    console.log(selected + 1)
    getData(selected + 1)
  };

  const pageCount = Math.ceil(13246 / 100);

  useEffect(() => {
    getData(1)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {!isLoading ? (
        <div>
          {data.status === 200 ? (
            <div className='flex flex-col overflow-y-auto'>
              <table className='w-full max-w-7xl mx-auto px-4 sm:px-6 text-sm text-left'>
                <thead className='text-gray-500 text-xs'>
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
                          <Typography className='font-bold'>{coin.name}</Typography>
                          <Typography className='font-bold text-xs hidden md:flex'>{String(coin.symbol).toUpperCase()}</Typography>
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
                        <Typography>${Number(coin.total_volume).toLocaleString('en-US')}</Typography>
                      </th>
                      <th className='px-6 py-4'>
                        <Typography>${Number(coin.market_cap).toLocaleString('en-US')}</Typography>
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
      ) : (
        <div>
          <LoadingLogo />
        </div>
      )}
      <div className='flex justify-center mt-3'>
        <div className=''>
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel="..."
            pageRangeDisplayed={2}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns duration-200 flex flex-row gap-3 py-2 rounded-lg bg-gray-200 dark:bg-zinc-800 duration-200 text-zinc-900 dark:text-gray-400"}
            disabledClassName={"text-zinc-200"}
            activeClassName={"paginationActive rounded-lg bg-blue-500 px-2 text-white"}
          />
        </div>
      </div>
    </div>
  )
}

export default Index