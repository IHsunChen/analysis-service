import React from 'react'
import Header from '../Header/Header'
import peerGrade from '../../images/peerGrade.png'

function PeerGrade() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header 
        text="4 | Tesla's Peer Ratings"
      />
      <img className="mx-auto p-3" src={peerGrade} alt="" />
    </div>
  )
}

export default PeerGrade
