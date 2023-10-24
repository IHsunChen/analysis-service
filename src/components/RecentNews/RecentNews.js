import React from 'react'
import Header from '../Header/Header'
import newsImpact from '../../images/newsImpact.png'

const events = [
  {
    title: "Tesla Q3 Earnings Highlights: Revenue Miss, EPS Miss, Cybertruck Launch Set For November And More",
    published_date: "10/18/2023",
    url: "https://www.benzinga.com/news/earnings/23/10/35318136/tesla-q3-earnings-highlights-revenue-miss-eps-miss-cybertruck-launch-set-fornovember-and-more",
    impact: -10.92
  },
  {
    title: "Tesla Says 'Our operating income decreased YoY to $1.8B in Q3, resulting in a 7.6% operating margin. YoY'",
    published_date: "10/18/2023",
    url: "https://www.benzinga.com/news/earnings/23/10/35317568/tesla-says-our-operating-income-decreased-yoy-to-1-8b-in-q3-resulting-in-a-7-6-operating-margin-yoy",
    impact: 12.98
  },
  {
    title: "Elon Musk Says Tesla's Robotaxi 'Will Look Like The Future' — Remains Mum On $25K Model 2",
    published_date: "9/9/2023",
    url: "https://www.benzinga.com/news/earnings/23/10/35318136/tesla-q3-earnings-highlights-revenue-miss-eps-miss-cybertruck-launch-set-fornovember-and-more",
    impact: -10.92
  },
  {
    title: " Tesla Q3 Total Deliveries Up 27% YoY",
    published_date: " 10/18/2023",
    url: " https://www.benzinga.com/news/earnings/23/10/35317664/tesla-q3-total-deliveries-up-27-yoy",
    impact: 10.99
  }
]
function RecentNews() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="11 | Tesla's Recent News Impact On Price Movement"
      />
      <div className='p-3'>
        <p className='tracking-wide leading-7 mt-5'>
          Benzinga produces tons of news around several different financial events every day. Below, you can see an analysis of
          Tesla's stock price over the last 3 months labeled with the news events from us that seemed to have the largest price
          impact.
        </p>
        <h1 className='mt-7 text-blue-800 font-black'>Visualizing Tesla's Most Impactful News Events (3 months)</h1>
        <img className="p-3 mx-auto" src={newsImpact} alt="" />
        <h1 className='mt-7 text-blue-800 font-black'>Tesla's Most Impactful News Events Over Past 90 Days</h1>

        <div className='mt-5'>
          <div className='w-full mt-5'>
            {events.map((item, index) => {
              return (
                <>
                  <div className='p-2 text-sm bg-gray-100 font-black'>
                    {index+1}. {item.title}
                  </div>
                  <div className='p-2 text-sm '>
                    <span className='font-black'>Date Published:</span> {item.published_date}
                  </div>
                  <div className='p-2 text-sm '>
                    <span className='font-black'>URL:</span> <a href="" className='underline text-blue-600'>{item.url}</a>
                  </div>
                  <div className='p-2 text-sm border-b border-b-black'>
                    <span className='font-black'>Resulting Price Change:</span> <span className={item.impact > 0 ? "text-green-400" : "text-red-600"}>{item.impact}</span> %
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentNews
