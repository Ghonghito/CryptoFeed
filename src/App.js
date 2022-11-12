import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Main from 'pages/Main'
import CoinPage from 'pages/CoinPage'

function App() {
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
