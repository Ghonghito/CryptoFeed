import React from 'react'
import DarkModeButton from 'components/DarkModeButton'
import Typography from 'components/Typography'

const MarketOverview = ({ globalData, isMobile }) => {
  return (
    <div>
      {Number(globalData.status) === 200 ? (
        <div className='flex justify-between items-center py-3 md:justify-between md:space-x-10'>
          <div className='flex justify-start lg:flex-1 items-center space-x-8'>
            <div className='space-x-5 flex text-xs'>
              <Typography className='flex items-center gap-1 whitespace-nowrap'>ქოინები: <span className='text-primary'>{Number(globalData.data.data.active_cryptocurrencies).toLocaleString('en-US')}</span></Typography>
              <Typography className='flex items-center gap-1 whitespace-nowrap'>ბირჟები: <span className='text-primary'>{Number(globalData.data.data.markets).toLocaleString('en-US')}</span></Typography>
              <Typography className='flex items-center gap-1 whitespace-nowrap'>კაპიტალიზაცია: <span className='text-primary'>${Number(globalData.data.data.total_market_cap.usd).toLocaleString('en-US')}</span></Typography>
              <Typography className='flex items-center gap-1 whitespace-nowrap'>24სთ ნავაჭრი: <span className='text-primary'>${Number(globalData.data.data.total_volume.usd).toLocaleString('en-US')}</span></Typography>
              <Typography className='flex items-center gap-1 whitespace-nowrap'>BTC დომინირება: <span className='text-primary'>{Number(globalData.data.data.market_cap_percentage.btc).toLocaleString('en-US')}%</span></Typography>
            </div>
          </div>
          {!isMobile && (<DarkModeButton />)}
        </div>
      ) : null}
    </div>
  )
}

export default MarketOverview