import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Typography from 'components/Typography'
import { getMarketChart } from 'utils/API/CoinGeckoAPI'

const Chart = ({ id }) => {
  const [chartData, setChartData] = useState([])

  const getMarketsData = async (coin, day) => {
    const getChart = await getMarketChart(coin, day)
    console.log(getChart)
    setChartData(getChart)
  }

  useEffect(() => {
    getMarketsData(id, 1)
    // eslint-disable-next-line
  }, [])

  const options = {
    chart: {
      zoomType: 'x',
      backgroundColor: '#101115'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      labels: {
        // eslint-disable-next-line
        format: '${value}'
      },
      title: {
        text: ''
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[1]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      type: 'area',
      name: 'ფასი',
      data: chartData.status === 200 ? chartData.data.prices : null
    }]
  }


  return (
    <div>
      {chartData.status === 200 ? (
        <div>
          <div className='flex overflow-y-hidden flex-row items-center gap-2 mb-3'>
            <div onClick={() => getMarketsData(id, 1)} className='duration-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:scale-95'>
              <Typography className='text-sm block whitespace-nowrap'>1 დღე</Typography>
            </div>
            <div onClick={() => getMarketsData(id, 7)} className='duration-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:scale-95'>
              <Typography className='text-sm block whitespace-nowrap'>1 კვირა</Typography>
            </div>
            <div onClick={() => getMarketsData(id, 30)} className='duration-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:scale-95'>
              <Typography className='text-sm block whitespace-nowrap'>30 დღე</Typography>
            </div>
            <div onClick={() => getMarketsData(id, 90)} className='duration-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:scale-95'>
              <Typography className='text-sm block whitespace-nowrap'>90 დღე</Typography>
            </div>
            <div onClick={() => getMarketsData(id, 180)} className='duration-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:scale-95'>
              <Typography className='text-sm block whitespace-nowrap'>180 დღე</Typography>
            </div>
            <div onClick={() => getMarketsData(id, 365)} className='duration-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:scale-95'>
              <Typography className='text-sm block whitespace-nowrap'>1 წელი</Typography>
            </div>
            <div onClick={() => getMarketsData(id, 'max')} className='duration-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg cursor-pointer hover:scale-95'>
              <Typography className='text-sm block whitespace-nowrap'>MAX</Typography>
            </div>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Chart