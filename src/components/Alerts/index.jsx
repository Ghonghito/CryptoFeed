import React from 'react'
import { AiFillCheckCircle, AiFillWarning, AiFillCloseCircle } from 'react-icons/ai'
import { MdInfo } from 'react-icons/md'

const index = ({ variant, text }) => {
  return (
    <div>
      {variant === 'info' ? (
        <div className='flex p-2 md:p-3 text-sm bg-blue-100 dark:bg-blue-900 rounded-lg border-[1px] border-blue-500 shadow-md' role='alert'>
          <MdInfo className='text-blue-500 inline flex-shrink-0 text-[20px] mr-2' />
          <span className='sr-only'>Info</span>
          <div>
            <p className='text-zinc-900 dark:text-white text-sm w-full font-semibold'>{text}</p>
          </div>
        </div>
      ) : null}
      {variant === 'success' ? (
        <div className='flex p-3 text-sm bg-green-200 rounded-lg border-[1px] border-green-500 shadow-md' role='alert'>
          <AiFillCheckCircle className='text-green-400 inline flex-shrink-0 text-[20px] mr-2' />
          <span className='sr-only'>success</span>
          <div>
            <p className='text-zinc-900 text-sm w-full font-semibold'>{text}</p>
          </div>
        </div>
      ) : null}
      {variant === 'warning' ? (
        <div className='flex p-3 text-sm bg-yellow-200 rounded-lg border-[1px] border-yellow-500 shadow-md' role='alert'>
          <AiFillWarning className='text-yellow-500 inline flex-shrink-0 text-[20px] mr-2' />
          <span className='sr-only'>warning</span>
          <div>
            <p className='text-zinc-900 text-sm w-full font-semibold'>{text}</p>
          </div>
        </div>
      ) : null}
      {variant === 'error' ? (
        <div className='flex p-3 text-sm bg-red-200 rounded-lg border-[1px] border-red-300 shadow-md' role='alert'>
          <AiFillCloseCircle className='text-green-400 inline flex-shrink-0 text-[20px] mr-2' />
          <span className='sr-only'>error</span>
          <div>
            <p className='text-zinc-900 text-sm w-full font-semibold'>{text}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default index