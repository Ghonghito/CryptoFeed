import React, { useEffect } from 'react'
import { MdDarkMode } from 'react-icons/md'

const Index = () => {
  const darkModeSet = localStorage.getItem('darkMode')

  function setDarkMode() {
    const darkModeSet = localStorage.getItem('darkMode')
    if (darkModeSet === null) {
      localStorage.setItem('darkMode', 'dark')
      document.documentElement.classList.add('dark')
    } else if (darkModeSet === 'light') {
      localStorage.setItem('darkMode', 'dark')
      document.documentElement.classList.add('dark')
    } else if (darkModeSet === 'dark') {
      localStorage.setItem('darkMode', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    setDarkMode()
    // eslint-disable-next-line
  }, [])


  return (
    <div>
      <div
        onClick={() => setDarkMode()}
        className='cursor-pointer'>
        {darkModeSet === 'light' ?
          <MdDarkMode className='text-2xl text-primary' />
          :
          <MdDarkMode className='text-2xl text-primary' />
        }
      </div>
    </div>
  )
}

export default Index