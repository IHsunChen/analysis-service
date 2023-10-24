import React from 'react'
import Header from '../Header/Header'

function Description() {
  return (
    <div className='w-3/5 bg-white mx-auto mt-5 p-5'>
      <Header
        text="1 | Company Description"
      />
      <p className='mt-5 tracking-wide leading-7 p-3'>
        Founded in 2003 and based in Palo Alto, California, Tesla is a vertically integrated sustainable energy company that also
        aims to transition the world to electric mobility by making electric vehicles. The company sells solar panels and solar
        roofs for energy generation plus batteries for stationary storage for residential and commercial properties including
        utilities. Tesla has multiple vehicles in its fleet, which include luxury and midsize sedans and crossover SUVs. The
        company also plans to begin selling more affordable sedans and small SUVs, a light truck, a semi truck, and a sports car.
        Global deliveries in 2022 were a little over 1.3 million vehicles.
      </p>
    </div>
  )
}

export default Description
