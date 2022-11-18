import React from 'react'
import Typography from 'components/Typography'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Index = ({ data, name, shadowColor }) => {
  return (
    <div>
      <div className={`duration-200 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm ${shadowColor ? `shadow-${shadowColor}-500` : null} p-4`}>
        <div className='flex items-center gap-1'>
          <Typography className='text-2xl'>{data}</Typography>
          {shadowColor ? (
            <div>
              {shadowColor === 'green' ? (
                <div>
                  <FaArrowUp className='text-green-400' />
                </div>
              ) : (
                <div>
                  <FaArrowDown className='text-red-400' />
                </div>
              )}
            </div>
          ) : null}
        </div>
        <Typography className='text-sm'>{name}</Typography>
      </div>
    </div>
  )
}

export default Index