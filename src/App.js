import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Main from 'pages/Main'
import CoinPage from 'pages/CoinPage'

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

  return (
    <div className='duration-200 bg-whiteBackground dark:bg-zinc-900 min-h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/dashboard' element={<Main />} />
          <Route path='/currency/:id' element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
