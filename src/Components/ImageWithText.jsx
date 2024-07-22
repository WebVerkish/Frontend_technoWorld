import React from 'react'
import arrowIconWhite from '../Icon/build-header-white-arrow.svg'
import imageTxt from '../images/imageText.png';

function ImageWithIext() {
  return (
    <section className='page-width image-text-overlay' data-sectionid='image-text-overlay'>
    <div class="left-section-img-txt-wrapper">
        <div class="left-section-child">
          <h2>Building dev team, Quickly and  Affordably</h2>
          <p className='p12'>We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.</p>
          <button className="button">Build A Team  
                <img src={arrowIconWhite}  alt="Arrow Build" />
          </button>
        </div>
    </div>
    <div className='right-img-txt-wrapper'>
        <div className='img-wrapper-img-txt'>
            <img src={imageTxt} alt='meeting'></img>
        </div>
    </div>
    </section>
  ) 
}

export default ImageWithIext