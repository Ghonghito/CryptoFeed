import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuItem } from 'routes'
import Typography from 'components/Typography'
import SidenavItem from 'components/Header/Item'
import CryptoFeedLogo from 'assets/images/CryptoFeedLogo.svg'

const index = () => {
  return (
    <div className='bg-blue-900/20 mt-auto'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 text-sm text-left py-10'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div>
            <div className='flex gap-2 items-center'>
              <NavLink to={`/`} className='flex items-center gap-2'>
                <img src={CryptoFeedLogo} alt='logo' className='w-8' />
                <p className='font-bold text-primary text-lg'>CRYPTOFEED</p>
              </NavLink>
            </div>
            <div className='hidden md:flex flex-col'>
              <div className='mt-2 w-[180px]'>
                <Typography>CryptoFeed ინფორმაციას იღებს CoinGecko და CryptoRank-ის API-დან.</Typography>
              </div>
              <div className='mt-12 w-[180px]'>
                <Typography>© 2022 CryptoFeed.</Typography>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:gap-12'>
            <div>
              <div className='flex flex-col mt-2 space-y-4'>
                <SidenavItem menuItem={menuItem} />
              </div>
            </div>
            <div className='flex md:hidden border-[1px] w-full mt-3 border-zinc-200 dark:border-zinc-800'></div>
            <div>
              <div className='flex flex-col mt-2 space-y-4'>
                <Typography>Explore</Typography>
                <NavLink to={'/currency/bitcoin'} exact='true'>
                  <Typography>ბიტკოინის ფასი</Typography>
                </NavLink>
                <NavLink to={'/currency/ethereum'} exact='true'>
                  <Typography>ეთერიუმის ფასი</Typography>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index