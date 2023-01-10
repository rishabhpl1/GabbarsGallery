import React from 'react'

function LandingAnimation() {
  return (
    <div className='border-2 border-black bg-black w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
      <img className='w-[300px] h-[400px] gabbar-icon animate-bounce'
      src="/static/GabbarPNG66Per.png" alt="Loading image"/>
      <h2 className="text-white text-4xl gabbar-loading-heading">Loading</h2>
      </div>
  )
}

export default LandingAnimation