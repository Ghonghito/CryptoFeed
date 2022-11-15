import React from 'react'
import Card from 'components/Cards/Card'
import Typography from 'components/Typography'

const index = ({ name, data, percent }) => {
  return (
    <div>
      <Card className='p-2'>
        <div className='flex items-center gap-1'>
          <Typography className='text-sm'>{name}</Typography>
          {percent && (
            <Typography className='text-xs' color={`${Number(percent) > 0 ? 'text-green-500' : 'text-red-500'}`}>{percent}%</Typography>
          )}
        </div>
        <Typography className='text-sm'>{data}</Typography>
      </Card>
    </div>
  )
}

export default index