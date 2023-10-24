import React from 'react'
import Header from '../Header/Header'
import pastPerformance from '../../images/pastPerformance.png'

function PastPerformance() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="9 | Past Performance"
        starCount={5}
      />
      <div className='p-3 mt-5'>
        <p className='tracking-wide leading-7'>
          How has Tesla performed over the past 5 years? The two main factors that we consider when analyzing past performance
          is overall return and volatility.
        </p>
        <h1 className='mt-5 text-blue-800 font-black'>Tesla 5-Year Performance</h1>
        <img className="mx-auto p-3" src={pastPerformance} alt="" />
        <p className='tracking-wide leading-7'>
          Using these two metrics, we can determine if this stock gave its investors enough return for the risk that they took on by
          owning it. This is measured by the <span className='font-black'>sharpe ratio</span>, which has been used as a primary measure of risk/reward trade-off for
          almost 60 years.
        </p>
        <p className='mt-7 tracking-wide leading-7'>
          This ratio can be interpreted as the amount of return an investor has received for the amount of risk that they took on by
          owning the stock over that timeframe. Tesla sharpe ratio over the past 5 years is 2.51, <span className='font-black'>
            which is considered to be above
            average compared to the peer average of -0.03.
          </span>
        </p>
      </div>
    </div>
  )
}

export default PastPerformance
