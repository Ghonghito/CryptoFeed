import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Index = ({ data, name, shadowColor }) => {
  return (
    <div>
      <div className={`duration-200 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm ${shadowColor ? `shadow-${shadowColor}-500` : null} p-4`}>
        <div className='flex items-center gap-1'>
          <p className='duration-200 text-zinc-900 dark:text-gray-400 text-2xl'>{data}</p>
          {shadowColor ? (
            <div>
              {shadowColor === 'green' ? (
                <div>
                  <FaArrowUp className='text-green-500' />
                </div>
              ) : (
                <div>
                  <FaArrowDown className='text-red-500' />
                </div>
              )}
            </div>
          ) : null}
        </div>
        <p className='duration-200 text-zinc-900 dark:text-gray-400 text-sm'>{name}</p>
      </div>
    </div>
  )
}

export default Index