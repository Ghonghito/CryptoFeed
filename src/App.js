import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Main from 'pages/Main'
import CoinPage from 'pages/CoinPage'
import Exchanges from 'pages/Exchanges'
import News from 'pages/News'
import Footer from 'components/Footer'

function App() {

  useEffect(() => {
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
  }, [])
  /* bg-gradient-to-b from-[#081120] to-[#18181b] */
  return (
    <div className='flex flex-col duration-200 min-h-screen bg-whiteBackground dark:darkGradient'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/dashboard' element={<Main />} />
          <Route path='/currency/:id' element={<CoinPage />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/news' element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
