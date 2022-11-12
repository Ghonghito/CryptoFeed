import React from 'react'

const index = ({ data, name }) => {
  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between mb-1'>
        <p className='text-zinc-900 dark:text-gray-400 text-sm'>{name}</p>
        <p className='text-zinc-900 dark:text-gray-400 text-sm'>{data}</p>
      </div>
      <div className='border-[1px] duration-200 border-zinc-200 dark:border-zinc-800'></div>
    </div>
  )
}

export default index