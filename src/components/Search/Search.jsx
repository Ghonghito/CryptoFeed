import React, { useState } from 'react'
import Input from 'components/Input'
import Typography from 'components/Typography'
import { NavLink } from 'react-router-dom'
import { getSearch } from 'utils/API/CoinGeckoAPI'

const Search = ({ isMobile }) => {
  const [openSearch, setOpenSearch] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  const getSearchData = async (e) => {
    const value = e.target.value
    setSearchResult([])
    if (String(value).length > 2) {
      const data = await getSearch(value)
      setSearchResult(data.data.coins)
    }
  }

  return (
    <div>
      <div className={`${isMobile ? 'w-full' : null}`}>
        <Input onChange={event => getSearchData(event)} onClick={() => setOpenSearch(!openSearch)} id='coinName' placeholder='ძებნა' />
      </div>
      {searchResult.length > 0 && (
        <div>
          {openSearch && (
            <div className='absolute z-50 mt-2 h-[350px] w-full md:w-auto pr-6 md:pr-0 overflow-y-auto'>
              <div className='w-full shadow-md border-gray-500'>
                <div className='p-2 bg-[#E5E7EB] dark:bg-[#181818] rounded-lg'>
                  {searchResult.map((coin) => (
                    <div key={coin.id} onClick={() => setOpenSearch(!openSearch)} className='mt-2'>
                      <NavLink to={`/currency/${coin.id}`}  >
                        <div className='flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg'>
                          <img src={coin.large} alt={coin.name} className='w-5' />
                          <Typography className='text-sm'>{coin.name}</Typography>
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search