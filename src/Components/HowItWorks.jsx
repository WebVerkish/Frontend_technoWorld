import React from 'react'
// import { Link } from 'react-router-dom'
import '../css/howitwork.css'
import ImageWithText from './ImageWithText'
import MultiImageText from './MultiImageText'
import ImageBlockSection from './ImageBlockSection'
import BlockContentImage from './BlockContentImage'
import SpecializeCard from './SpecializeCard'
import Slider from './Slider'


// This is dummy for testing props 
import reactSlide from '../images/react-slide.png';
import angularSlide from '../images/angular-slide.png';
import nextSlide from '../images/next-slide.png';
import nodeSlide from '../images/node-slide.png';
const imageBlockData = [
  { imgSrc: reactSlide},
  { imgSrc: angularSlide},
  { imgSrc: nextSlide},
  { imgSrc: nodeSlide},
  { imgSrc: reactSlide}
]
// end this dummy 

function HowItWorks() {
  return (
    <div className='temp-how-its-work-page'>  
     <ImageWithText/>
     <MultiImageText/>
     <ImageBlockSection/>
     <BlockContentImage/>
     <SpecializeCard/>
     <Slider subheading="Specialized"  heading="Technologies" imageBlockData={imageBlockData}/>
     <Slider subheading="Clients"  heading="Amazing clients who trust us" imageBlockData={imageBlockData}/>
    </div>
  )
}

export default HowItWorks