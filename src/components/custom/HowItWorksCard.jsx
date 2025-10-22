import React from 'react'

function HowItWorksCard({ step, icon, title, description }) {
  return (
    <div className='relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100'>
      <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg'>
        <span className='text-lg font-bold text-white'>{step}</span>
      </div>
      <div className='mt-6 mb-6 p-4 bg-white rounded-full shadow-md text-orange-600'>
        {icon}
      </div>
      <h3 className='text-2xl font-bold text-gray-800 mb-4'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{description}</p>
    </div>
  )
}

export default HowItWorksCard