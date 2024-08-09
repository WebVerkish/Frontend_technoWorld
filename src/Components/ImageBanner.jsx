import React from 'react'
import imageTxt from '../images/imageText.png';

function ImageBanner() {
  return (
    <>
        <section className='image_banner' data-sectionid="image-banner">
            <div className='image-banner-wrapper'>
            <div className="image-wrapper-outer">
                <img src={imageTxt} alt="Logo" />
            </div>
            </div>
        </section>
    </>
  )
}

export default ImageBanner