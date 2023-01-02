import React from 'react'
import {images} from '../constants'

const Photos = () => {
  return (
    <div className='flex flex-col justify-center align-center gap-10 flex-wrap sm:flex-row'>

        {images.map((image, index) => 
            <div 
            className='max-w-[450px] rounded mx-10 border-4 border-yellow-600' 
            key={image.id}>
                <img src={image.url} 
                className="w-full h-[400px] object-cover object-center sm:w-[600px] h-[500px]" />
            </div>
            )}  
                  
    </div>
  )
}

export default Photos