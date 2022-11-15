import React from 'react'
import Typography from 'components/Typography'

const Item = ({ name, data, percent }) => {
  return (
    <div className='mt-2'>
      <div className='flex items-center justify-between'>
        <Typography className='text-sm'>{name}</Typography>
        {!percent ? (
          <Typography className='text-sm'>{data}</Typography>
        ) : (
          <div className='flex items-center gap-1'>
            <Typography className='text-sm'>{data}</Typography>
            <p className={`${Number(percent) > 0 ? 'text-green-400' : 'text-red-500'} text-sm`}>({Number(percent).toLocaleString('en-US')}%)</p>
          </div>
        )}
      </div>
      <div className='border-[1px] w-full mt-2 border-zinc-200 dark:border-zinc-900'></div>
    </div>
  )
}

export default Item