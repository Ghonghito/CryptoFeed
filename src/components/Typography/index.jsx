import React from 'react'

const index = ({ children, className = '', ...rest }) => {
  return (
    <div>
      <p {...rest} className={`duration-200 text-zinc-900 dark:text-gray-400 ${className}`}>{children}</p>
    </div>
  )
}

export default index