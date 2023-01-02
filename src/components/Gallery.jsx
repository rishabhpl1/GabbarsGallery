import React from 'react'
import Photos from './Photos'
import './gallery.css'


const Posts = () => {
  return (
    <div>
        <div className='flex justify-center align-center p-8'>
            <h1 className='heading text-5xl'>Gabbar's Gallery</h1>
        </div>
        <Photos />        
    </div>
  )
}

export default Posts