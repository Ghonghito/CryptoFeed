import React from 'react'
import CryptoFeedLogo from 'assets/images/CryptoFeedLogo.svg'

const index = () => {
  return (
    <div className='flex justify-center'>
      <div className='animate-spin'>
        <img src={CryptoFeedLogo} alt='logo' className='w-12' />
      </div>
    </div>
  )
}

export default index