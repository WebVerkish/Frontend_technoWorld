import React from 'react'
// import { Link } from 'react-router-dom'
import '../css/howitwork.css'
import ImageWithText from './ImageWithText'
import MultiImageText from './MultiImageText'
import ImageBlockSection from './ImageBlockSection'
import BlockContentImage from './BlockContentImage'
import SpecializeCard from './SpecializeCard'

function HowItWorks() {
  return (
    <div className='temp-how-its-work-page'>  
     <ImageWithText/>
     <MultiImageText/>
     <ImageBlockSection/>
     <BlockContentImage/>
     <SpecializeCard/>
    </div>
  )
}

export default HowItWorks