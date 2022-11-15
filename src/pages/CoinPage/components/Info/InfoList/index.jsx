import React from 'react'
import Typography from 'components/Typography'

const index = ({ data, name }) => {
  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between mb-1'>
        <Typography className='text-sm'>{name}</Typography>
        <Typography className='text-sm'>{data}</Typography>
      </div>
      <div className='border-[1px] duration-200 border-zinc-200 dark:border-zinc-800'></div>
    </div>
  )
}

export default index