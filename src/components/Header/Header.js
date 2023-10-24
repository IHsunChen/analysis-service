import React from 'react'
import StarIconSolid from '@heroicons/react/24/solid/StarIcon'

function Header({
  text,
  starCount
}) {
  return (
    <div className='font-bold p-3 bg-gray-100 text-blue-800 shadow-md flex '>
      {text}
      {starCount === 0 && (
        <div className='ml-3 flex'>
          {[...Array(5)].map((e, i) => {
            return <StarIconSolid className="h-6 w-6 text-black-400" />
          })}
        </div>
      )}
      {starCount > 0 && (
        <div className='ml-3 flex'>
          {[...Array(starCount)].map((e, i) => {
            return <StarIconSolid className="h-6 w-6 text-yellow-400" />
          })}
          {[...Array(5 - starCount)].map((e, i) => {
            return <StarIconSolid className="h-6 w-6 text-black-400" />
          })}
        </div>
      )}
    </div>
  )
}

export default Header
