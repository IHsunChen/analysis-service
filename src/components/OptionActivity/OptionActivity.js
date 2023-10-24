import React from 'react'
import Header from '../Header/Header'
import optionActivity from '../../images/optionActivity.png'

function OptionActivity() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="10 | Analyzing Tesla's Recent Options Activity"
      />
      <div className='p-3'>
        <p className='mt-7 tracking-wide leading-7'>
          Below, you can see the trend in options sentiment over the past 30 days. Based on our data, Tesla's options trades have
          recently carried more negative sentiment than positive.
        </p>
        <h1 className='mt-5 text-blue-800 font-black'>Tesla's Trailing 30-day Options Sentiment</h1>
        <img className="mx-auto p-3" src={optionActivity} alt="" />
      </div>
    </div>
  )
}

export default OptionActivity
