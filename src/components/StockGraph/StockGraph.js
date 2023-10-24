import React from 'react'
import Header from '../Header/Header'
import stockGraph from '../../images/stockGrapg.png'

function StockGraph() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header 
        text="2 | Tesla Stock Graph (3 months)"
      />
      <img src={stockGraph} alt="" className='mx-auto p-3'/>
    </div>
  )
}

export default StockGraph
