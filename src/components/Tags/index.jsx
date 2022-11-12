import React from 'react'

const index = ({ data, className = '' }) => {
  return (
    <div className='flex'>
      <div className={`duration-200 bg-blue-100 dark:bg-zinc-800 ${className} rounded-md`}>
        <p className='px-2 dark:text-gray-500 text-sm'>{data}</p>
      </div>
    </div>
  )
}

export default index