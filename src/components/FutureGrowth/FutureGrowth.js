import React from 'react'
import Header from '../Header/Header'
import futureGrowth from '../../images/futureGrowth.png'

const ratings = [
  {
    institution: "Citigroup",
    date: "2023-10-19",
    action: "Maintains",
    previousPriceTarget: 271.00,
    newPriceTarget: 255.00
  },
  {
    institution: "Wedbush",
    date: "2023-10-19",
    action: "Maintains",
    previousPriceTarget: 350.00,
    newPriceTarget: 310.00
  },
  {
    institution: "Morgan Stanley",
    date: "2023-10-19",
    action: "Maintains",
    previousPriceTarget: 400.00,
    newPriceTarget: 380
  },
]

function FutureGrowth() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="5 | Future Growth"
        starCount={1}
      />
      <p className='mt-5 tracking-wide leading-7 p-3'>
        Our estimate of future price growth is based on an aggregation of 27 analyst ratings over the past 3 months and their 12-
        month price targets
      </p>
      <p className='tracking-wide leading-7 p-3'>
        Below, you can see that analysts are estimating a 12-month price target range of $85.00 - $400.00 with an average of
        $267.07.
      </p>
      <img className="mx-auto p-3" src={futureGrowth} alt="" />
      <p className='tracking-wide leading-7 p-3'>
        Based on these ratings it seems like Tesla is posed for a 25.53% return over the next 12-months.
      </p>

      <div className='mt-5'>
        <h1 className='text-blue-800 font-black'>Recent Ratings For Tesla</h1>
        <div className='w-full mt-5'>
          {ratings.map((item, index) => {
            return (
              <>
                <div className='p-2 text-sm bg-gray-100 font-black'>
                  {item.institution}
                </div>
                <div className='p-2 text-sm '>
                  <span className='font-black'>Action:</span> {item.action}
                </div>
                <div className='p-2 text-sm '>
                  <span className='font-black'>Previous Price Target:</span> ${item.previousPriceTarget.toFixed(2)}
                </div>
                <div className='p-2 text-sm border-b border-b-black'>
                  <span className='font-black'>New Price Target:</span> ${item.newPriceTarget.toFixed(2)}
                </div>
              </>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default FutureGrowth
