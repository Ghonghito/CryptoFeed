import React, { useState, useEffect } from 'react'
import Search from '../Search/Search'
import DarkModeButton from 'components/DarkModeButton'
import CryptoFeedLogo from 'assets/images/CryptoFeedLogo.svg'
import Typography from 'components/Typography'
import MarketOverview from './MarketOverview'
import { menuItem } from 'routes'
import { NavLink } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { getGlobalData } from 'utils/API/CoinGeckoAPI'
import SidenavItem from './Item'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [globalData, setGlobalData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    setIsLoading(true)
    const getData = await getGlobalData()
    setGlobalData(getData)
    setIsLoading(!isLoading)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='duration-200 bg-whiteBackground dark:bg-darkBackground'>
      <Transition show={isOpen}
        className='fixed h-screen flex md:hidden mt-12 z-50'
        enter='transition ease-in-out duration-200 transform'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-200 transform'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'>
        <div className='inset-0 w-screen h-screen overflow-y-auto p-3 mt-[-50px] duration-200 bg-whiteBackground dark:bg-darkBackground'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <NavLink to={`/`} className='flex items-center gap-2'>
                <img src={CryptoFeedLogo} alt='logo' className='w-5' />
                <p className='font-bold text-primary'>CRYPTOFEED</p>
              </NavLink>
            </div>
            <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineClose className='text-primary text-2xl' />
            </div>
          </div>
          <div className='border-[1px] w-full mt-3 border-zinc-200 dark:border-zinc-800'></div>
          <div>
            <div className='flex flex-col py-2 mt-2 space-y-4'>
              <SidenavItem menuItem={menuItem} mobile={true} />
            </div>
          </div>
          <div className='border-[1px] w-full mt-3 border-zinc-200 dark:border-zinc-800'></div>
          <div className='flex'>
            <div className='bg-zinc-100 dark:bg-zinc-800 p-2 rounded-md mt-3 dark:shadow-md'>
              <DarkModeButton />
            </div>
          </div>
        </div>
      </Transition>
      <div>
        <div className='hidden md:flex'>
          <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
            <MarketOverview globalData={globalData} />
          </div>
        </div>
        <div className='border-[1px] duration-200 border-zinc-200 dark:border-zinc-800'></div>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center py-3 md:justify-between md:space-x-10'>
            <div className='flex justify-start lg:flex-1 items-center space-x-8'>
              <div>
                <NavLink to={`/`} className='flex items-center gap-2'>
                  <img src={CryptoFeedLogo} alt='logo' className='w-5' />
                  <p className='font-bold text-primary'>CRYPTOFEED</p>
                </NavLink>
              </div>
              <div className='space-x-5 hidden md:flex'>
                <SidenavItem menuItem={menuItem} />
              </div>
            </div>
            <div className='hidden md:flex'>
              <Search />
            </div>
            <div className='flex md:hidden'>
              <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-primary text-2xl cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='flex md:hidden justify-center'>
          <div className='mb-3 w-full px-3'>
            <Search isMobile={true} />
          </div>
        </div>
        <div className='border-[1px] duration-200 border-zinc-200 dark:border-zinc-800'></div>
        <div className='flex md:hidden'>
          <div className='overflow-y-auto'>
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
              <MarketOverview globalData={globalData} isMobile={true} />
            </div>
          </div>
          <div className='border-[1px] duration-200 border-zinc-200 dark:border-zinc-800'></div>
        </div>
      </div>
    </div>
  )
}

export default Header