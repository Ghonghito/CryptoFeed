import React from 'react'
import Typography from 'components/Typography'

const TrendingItem = ({ name, symbol, price, logo, rank }) => {
  return (
    <div className='duration-200 bg-gray-200 dark:bg-zinc-900 rounded-lg p-2'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt='BTC' className='w-5' />
          <div className='flex items-center gap-2'>
            {name && (<Typography>{name}</Typography>)}
            <Typography className='text-sm'>{symbol}</Typography>
          </div>
        </div>
        {price ? (
          <Typography>{price}</Typography>
        ) : null}
        {rank ? (
          <Typography>#{rank}</Typography>
        ) : null}
      </div>
    </div>
  )
}

export default TrendingItem