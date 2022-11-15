import React from 'react'
import Card from 'components/Cards/Card'
import Typography from 'components/Typography'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const index = ({ data }) => {
  return (
    <div>
      {data.map((x) => (
        <Card key={x.id} className='p-3 mt-2'>
          <a href={x.url} target='_blank' rel="noreferrer">
            <Typography className='text-md md:text-2xl hover:underline'>{x.title}</Typography>
          </a>
          <div className='hidden md:flex'>
            <Typography className='text-sm'>{x.description}</Typography>
          </div>
          <p className='text-primary text-sm'>წყარო: {x.source.name}</p>
          <a href={x.url} target='_blank' rel="noreferrer">
            <div className='flex items-center gap-1 justify-end'>
              <Typography className='text-sm'>ნახე</Typography>
              <BsFillArrowRightCircleFill className='text-blue-500' />
            </div>
          </a>
        </Card>
      ))}
    </div>
  )
}

export default index