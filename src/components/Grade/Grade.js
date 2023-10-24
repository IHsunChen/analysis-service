import React from 'react'
import Header from '../Header/Header'
import grade from '../../images/grade.png'

function Grade() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="3 | How We Grade Tesla"
      />
      <p className='mt-5 tracking-wide leading-7 p-3'>
        We grade stocks based on past performance, their future growth potential, intrinsic value, dividend history, and overall
        financial health. The chart below shows how we grade Tesla across the board compared to its closest peers.
      </p>
      <img className="mx-auto p-3" src={grade} alt="" />
    </div>
  )
}

export default Grade
