import React from 'react'
import NewsCard from './components/NewsCard'
import { getNews } from 'utils/API/CryptoRankAPI'

const index = () => {

  const getCryptoNewsData = async () => {
    const data = await getNews()
  }

  getCryptoNewsData()

  return (
    <div>
      <NewsCard />
    </div>
  )
}

export default index