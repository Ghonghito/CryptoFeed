import React from 'react'
import Card from 'components/Cards/Card'
import Typography from 'components/Typography'
import Item from './Item'

const index = ({ data, symbol }) => {
  return (
    <div>
      <Card className='p-3'>
        <div>
          <Typography className='text-xl'>{symbol} სტატისტიკა</Typography>
        </div>
        <div className='mt-5'>
          <Item
            data={`$${Number(data.current_price.usd).toLocaleString('en-US')}`}
            name={`${symbol} ფასი`} />
          <Item
            data={`$${Number(data.low_24h.usd).toLocaleString('en-US')} / $${Number(data.high_24h.usd).toLocaleString('en-US')}`}
            name='24სთ High / Low' />
          <Item
            data={`$${Number(data.total_volume.usd).toLocaleString('en-US')}`}
            name='ნავაჭრი' />
          <Item
            data={`$${Number(data.market_cap.usd).toLocaleString('en-US')}`}
            percent={data.market_cap_change_percentage_24h}
            name='კაპიტალიზაცია' />
          <Item
            data={`$${Number(data.ath.usd).toLocaleString('en-US')}`}
            percent={data.ath_change_percentage.usd}
            name='ATH' />
          <Item
            data={`${(data.ath_date.usd)}`}
            name='ATH-ს თარიღი' />
          <Item
            data={`$${Number(data.atl.usd).toLocaleString('en-US')}`}
            percent={data.atl_change_percentage.usd}
            name='ATL' />
          <Item
            data={`${(data.atl_date.usd)}`}
            name='ATH-ს თარიღი' />
        </div>
      </Card>
    </div>
  )
}

export default index