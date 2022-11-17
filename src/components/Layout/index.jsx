import React from 'react'

const index = ({ children, className = '', ...rest }) => {
  return (
    <div {...rest} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}

export default index