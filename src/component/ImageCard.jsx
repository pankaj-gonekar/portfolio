import React from 'react'


function ImageCard(data) {  
  return (
    <div className='m-auto'>
        <img className='w-80 h-56 object-cover rounded-xl drop-shadow-dark hover:-mt-4 hover:border-2 border-gray-700  hover:mix-blend-overlay' src={data.logoData.image} alt="image" />
        <p className='pt-3 pb-7 text-gray-200 text-lg text-center font-bold drop-shadow-dark'>{data.logoData.name}</p>
    </div>
  )
}

export default ImageCard