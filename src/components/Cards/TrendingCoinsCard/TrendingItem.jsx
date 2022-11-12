import React from 'react'

const TrendingItem = ({ name, symbol, price, logo, rank }) => {
  return (
    <div className='bg-gray-200 dark:bg-zinc-900 rounded-lg p-2'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt='BTC' className='w-5' />
          <div className='flex items-center gap-2'>
            {name && (<p className='text-zinc-900 dark:text-gray-400'>{name}</p>)}
            <p className='text-zinc-900 dark:text-gray-500 text-sm'>{symbol}</p>
          </div>
        </div>
        {price ? (
          <p className='text-zinc-900 dark:text-gray-400'>{price}</p>
        ) : null}
        {rank ? (
          <p className='text-zinc-900 dark:text-gray-400'>#{rank}</p>
        ) : null}
      </div>
    </div>
  )
}

export default TrendingItem