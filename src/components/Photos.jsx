import React, {useState} from 'react'
import {images} from '../constants'

const Photos = () => {

  const [pic, setPic] = useState(null);
  const [selected, setSelected] = useState(false)
  const [blur, setBlur] = useState("")

  const handleClick = (image) => {
    setSelected(true)
    setPic(image.url)
    setBlur("blur-lg")
  }
  const handleClickOnCancel = () =>{
    setSelected(false)
    setBlur("")
  }
  return (
    <>
    <div className='flex justify-center align-center p-8'>
        <h1 className={`heading text-5xl filter ${blur}`}>Gabbar's Gallery</h1>
    </div>
    
    <div className={selected ? "block" : "hidden"}>

      <img src={pic} alt="selected pic of gabbar"
      className="fixed top-0 left-0 z-40 w-full h-full bg-blend-darken border-4 border-black object-contain p-10" />
      <span onClick={()=> handleClickOnCancel()} 
      className="fixed top-5 right-10 z-40 text-6xl font-bold cursor-pointer">&times;</span>

    </div>

    <div className='flex flex-col justify-center align-center gap-10 flex-wrap sm:flex-row'>
        {images.map((image, index) => 
            <div onClick={() => handleClick(image)}
            className={` overflow-hidden max-w-[450px] rounded mx-10 border-4 border-white filter ${blur}`} 
            key={image.id}>
                <img src={image.url} 
                className="transition linear delay-150 hover:scale-105 cursor-pointer w-full h-[400px] object-cover object-center sm:w-[600px] h-[500px]" />
            </div>
            )}  
    </div>
    </>
  )
}

export default Photos