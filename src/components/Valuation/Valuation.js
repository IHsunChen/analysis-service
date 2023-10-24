import React from 'react'
import Header from '../Header/Header'
import peRanking from '../../images/peRanking.png'
import historyEarning from '../../images/historyEarning.png'

function Valuation() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="6 | Valuation"
        starCount={1}
      />
      <h1 className='text-blue-800 font-black mt-5 p-3'>Valuing Tesla Relative To Its Peers</h1>
      <p className='tracking-wide leading-7 p-3'>
        Another way of valuing a stock is to compare its Price/Earnings ratio to other stocks that are similar in industry and size.
        This method is called, <span className='font-black'>relative valuation</span>, and it allows analysts to guage the price that a stock should be trading at based
        on how it performs relative to companies that are most similar to it.
      </p>
      <p className='tracking-wide leading-7 p-3'>
        Based on a comparison analysis against its closest peers, Tesla is trading at 5.6x the peer average of 11.19.
      </p>

      <h1 className='text-blue-800 font-black mt-5 p-3'>Valuing Tesla P/E Ranking Amongst Its Peers</h1>
      <img className="mx-auto p-3" src={peRanking} alt="" />
      <p className='tracking-wide leading-7 p-3'>
        As you can see from the chart above, Tesla is currently ranked #7 amongst its peers.
      </p>

      <h1 className='text-blue-800 font-black mt-5 p-3'>Tesla's Earnings History (3 years)</h1>
      <p className='tracking-wide leading-7 p-3'>
        It is important to look at a companies earnings history to see not only if they are profitable, but if their earnings are
        growing.
      </p>
      <img className="mx-auto p-3" src={historyEarning} alt="" />
      <p className='tracking-wide leading-7 p-3'>
        As you can see from the chart above, Tesla's earnings have increased recently, this is a positive sign for the stock.
      </p>
    </div>
  )
}

export default Valuation
