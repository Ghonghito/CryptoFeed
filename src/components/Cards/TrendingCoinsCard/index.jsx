import React from 'react'
import TrendingItem from './TrendingItem'
import CoinGeckoLogo from 'assets/images/aggregators/CoinGeckoLogo.svg'
import Typography from 'components/Typography'
import { NavLink } from 'react-router-dom'

const Index = ({ data }) => {
  return (
    <div>
      <div className='duration-200 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm p-3'>
        <div className='flex items-center justify-between'>
          <Typography>🔥 ტრენდული ქოინები</Typography>
          <a href="http://coingecko.com" target='_blank' rel="noreferrer">
            <img src={CoinGeckoLogo} alt='CoinGecko Logo' className='w-5' />
          </a>
        </div>
        <div className='mt-3'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 w-full'>
            {data.data.coins.map((x) => (
              <NavLink key={x.item.name} to={`/currency/${x.item.slug}`}>
                <TrendingItem
                  symbol={x.item.symbol}
                  logo={x.item.large}
                  rank={x.item.market_cap_rank} />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index