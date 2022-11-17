import React from 'react';
import HeroStatistics from './components/HeroStatistics'
import CryptoTable from 'components/CryptoTable'
import Layout from 'components/Layout'

function App() {


  return (
    <Layout>
      <HeroStatistics />
      <div>
        <CryptoTable />
      </div>
    </Layout>
  );
}

export default App;
