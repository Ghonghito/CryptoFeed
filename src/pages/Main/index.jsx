import React from 'react';
import HeroStatistics from './components/HeroStatistics'
import CryptoTable from 'components/CryptoTable'

function App() {

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-3'>
      <HeroStatistics />
      <div className='mt-3'>
        <CryptoTable />
      </div>
    </div>
  );
}

export default App;
