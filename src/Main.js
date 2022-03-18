import React from 'react'
import {images} from './Data'
import { useState } from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'

const Main = () => {
    const [currentImg, setCurrentImage] = useState(0)

    const handleLeft = ()=> {
        if(currentImg > 0){
            setCurrentImage(currentImg - 1)
        }
        else{
            setCurrentImage(images.length-1)
        }
    }

    function handleRight (){
        if(currentImg === images.length-1){
            setCurrentImage(0)
        }
        else{
           setCurrentImage(currentImg + 1)  
        }
       
    }
  return (
    <div className='carousel'>
        
        <div className='carousel-inner' style={{backgroundImage: `url( ${images[currentImg].img}`}}>

            {/* {<img src={images[currentImg].img} alt="" /> */}
            <div className='left'><FaChevronCircleLeft onClick={handleLeft} size={50}/></div>
            <div className='center'><h2> {images[currentImg].title} </h2></div>
            <div className='right'><FaChevronCircleRight onClick={handleRight} size={50}/></div>
        </div>
    </div>
  )
}

export default Main