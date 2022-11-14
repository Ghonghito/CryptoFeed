import React, { useState, useEffect } from 'react'
import NewsCard from './components/NewsCard'
import Alert from 'components/Alerts'
import LoadingLogo from 'components/LoadingLogo'
import { getNews } from 'utils/API/CryptoRankAPI'

const Index = () => {
  const [newsData, setNewsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    setIsLoading(true)
    const data = await getNews()
    setNewsData(data)
    setIsLoading(!isLoading)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 mt-2'>
      <div className='w-full'>
        <Alert variant='info' text='ინფორმაცია აღებულია CryptoRank-დან.' />
      </div>
      {!isLoading ? (
        <div className='flex flex-col'>
          {Number(newsData.status) === 200 ? (
            <NewsCard data={newsData.data.data} />
          ) : null}
        </div>
      ) : (
        <div>
          <LoadingLogo />
        </div>
      )}
    </div>
  )
}

export default Index