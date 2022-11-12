import React, { useState, useEffect } from 'react'
import Search from './Search'
import DarkModeButton from './DarkModeButton'
import CryptoFeedLogo from 'assets/images/CryptoFeedLogo.svg'
import { Transition } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { getGlobalData } from 'utils/API/CoinGeckoAPI'

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
    <div>
      <Transition show={isOpen}
        className='fixed h-screen flex md:hidden mt-12'
        enter='transition ease-in-out duration-300 transform'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'>
        <div className='z-10 inset-0 w-screen h-screen overflow-y-auto p-3 mt-[-50px] bg-whiteBackground dark:bg-darkBackground dark:bg-darkModal rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <a href='/' className='flex items-center gap-2'>
                <img src={CryptoFeedLogo} alt='logo' className='w-5' />
                <p className='font-bold text-primary'>CRYPTOFEED</p>
              </a>
              <div>
                <DarkModeButton />
              </div>
            </div>
            <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineClose className='text-primary' />
            </div>
          </div>
          <div className='border-[1px] w-full mt-3 border-primary shadow-primary'></div>
          <div>
            <div className='flex flex-col py-2 mt-2 space-y-4'>
              <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-md'>კრიპტოვალუტები</a>
              <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-md'>ბირჟები</a>
              <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-md'>NFT</a>
              <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-md'>პროდუქტები</a>
            </div>
          </div>
        </div>
      </Transition>
      <div className=''>
        {Number(globalData.status) === 200 ? (
          <div className='hidden md:flex'>
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
              <div className='flex justify-between items-center py-3 md:justify-between md:space-x-10'>
                <div className='flex justify-start lg:flex-1 items-center space-x-8'>
                  <div className='space-x-5 hidden md:flex text-xs'>
                    <p className='text-gray-400'>ქოინები: <span className='text-primary'>{Number(globalData.data.data.active_cryptocurrencies).toLocaleString('en-US')}</span></p>
                    <p className='text-gray-400'>ბირჟები: <span className='text-primary'>{Number(globalData.data.data.markets).toLocaleString('en-US')}</span></p>
                    <p className='text-gray-400'>კაპიტალიზაცია: <span className='text-primary'>${Number(globalData.data.data.total_market_cap.usd).toLocaleString('en-US')}</span></p>
                    <p className='text-gray-400'>24სთ ნავაჭრი: <span className='text-primary'>${Number(globalData.data.data.total_volume.usd).toLocaleString('en-US')}</span></p>
                    <p className='text-gray-400'>BTC დომინირება: <span className='text-primary'>{Number(globalData.data.data.market_cap_percentage.btc).toLocaleString('en-US')}%</span></p>
                  </div>
                </div>
                <div>
                  <DarkModeButton />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className='border-[1px] duration-200 border-zinc-200 dark:border-zinc-800'></div>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center py-3 md:justify-between md:space-x-10'>
            <div className='flex justify-start lg:flex-1 items-center space-x-8'>
              <div>
                <a href='/' className='flex items-center gap-2'>
                  <img src={CryptoFeedLogo} alt='logo' className='w-5' />
                  <p className='font-bold text-primary'>CRYPTOFEED</p>
                </a>
              </div>
              <div className='space-x-5 hidden md:flex'>
                <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm'>კრიპტოვალუტები</a>
                <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm'>ბირჟები</a>
                <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm'>NFT</a>
                <a href='/#' className='duration-200 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm'>პროდუქტები</a>
              </div>
            </div>
            <div className='hidden md:flex'>
              <Search />
            </div>
            <div className='flex md:hidden'>
              <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className='text-primary text-lg cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='border-[1px] duration-200 border-zinc-200 dark:border-zinc-800'></div>
      </div>
    </div>
  )
}

export default Header