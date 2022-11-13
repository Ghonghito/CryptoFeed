import React from 'react'

const index = ({ children, className = '', ...rest }) => {
  return (
    <div>
      <div {...rest} className={`duration-200 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default index