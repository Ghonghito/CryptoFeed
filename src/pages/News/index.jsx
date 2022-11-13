import React, { useState, useEffect } from 'react'
import NewsCard from './components/NewsCard'
import { getNews } from 'utils/API/CryptoRankAPI'

const Index = () => {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    const data = await getNews()
    setNewsData(data)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-3'>
      <div className='flex flex-col gap-3'>
        {Number(newsData.status) === 200 ? (
          <NewsCard data={newsData.data.data} />
        ) : null}
      </div>
    </div>
  )
}

export default Index