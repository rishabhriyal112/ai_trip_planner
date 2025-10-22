import React from 'react'

function DestinationCard({ image, destination, country, description }) {
  return (
    <div className='relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group'>
      <img 
        src={image} 
        alt={destination}
        className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
      <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
        <h3 className='text-xl font-bold mb-1'>{destination}</h3>
        <p className='text-sm text-gray-200 mb-2'>{country}</p>
        <p className='text-xs text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default DestinationCard