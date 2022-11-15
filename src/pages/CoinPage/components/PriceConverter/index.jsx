import React from 'react'
import Card from 'components/Cards/Card'
import Typography from 'components/Typography'

const index = ({ data, coinLogo }) => {

  const calculateCoinInUSD = (e) => {
    const value = e.target.value
    const usdValue = document.getElementById('toCoin')
    const currentCoinPrice = data.current_price.usd
    const result = Number(currentCoinPrice) * value
    usdValue.value = result
  }

  const calculateUSDInCoin = (e) => {
    const value = e.target.value
    const coinValue = document.getElementById('fromCoin')
    const currentCoinPrice = data.current_price.usd
    const result = Number(value) / currentCoinPrice
    coinValue.value = result
  }

  return (
    <div>
      <Card className='p-2'>
        <Typography className='text-sm'>კალკულატორი</Typography>
        <div className='flex flex-col gap-2 mt-2'>
          <div id='from' className='bg-gray-300 dark:bg-zinc-900 rounded-lg px-2 py-1'>
            <div className='flex items-center gap-2'>
              <img src={coinLogo} alt="BTC" className='w-8' />
              <input
                id='fromCoin'
                placeholder='0'
                onChange={e => calculateCoinInUSD(e)}
                className='dark:placeholder:text-white placeholder:text-zinc-900 w-full text-right bg-gray-300 dark:bg-zinc-900 rounded-lg h-[40px] px-2 text-zinc-900 dark:text-white focus:outline-none' />
            </div>
          </div>
          <div id='to' className='bg-gray-300 dark:bg-zinc-900 rounded-lg px-2 py-1'>
            <div className='flex items-center gap-2'>
              <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" alt="USD" className='w-9' />
              <input
                id='toCoin'
                placeholder='0'
                onChange={e => calculateUSDInCoin(e)}
                className='dark:placeholder:text-white placeholder:text-zinc-900 w-full text-right bg-gray-300 dark:bg-zinc-900 rounded-lg h-[40px] px-2 text-zinc-900 dark:text-white focus:outline-none' />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default index