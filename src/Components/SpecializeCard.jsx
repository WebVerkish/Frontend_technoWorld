import React from 'react'

import frontend from '../images/frontend.png';
import angular from '../images/angular.png';
import chip from '../images/chip.png';
import security from '../images/security.png';

const imageBlockData = [
    { imgSrc: frontend,  title: 'Frontend Engineers' },
    { imgSrc: angular,  title: 'Angular Developers' },
    { imgSrc: chip,  title: 'AI and ML Engineers Deep Lerning/Machine Vision/NLP' },
    { imgSrc: security,  title: 'Application Security Engineers' },
    { imgSrc: frontend,  title: 'Frontend Engineers' },
    { imgSrc: angular,  title: 'Angular Developers' },
    { imgSrc: chip,  title: 'AI and ML Engineers Deep Lerning/Machine Vision/NLP' },
    { imgSrc: security,  title: 'Application Security Engineers' },
    { imgSrc: frontend,  title: 'Frontend Engineers' },
    { imgSrc: angular,  title: 'Angular Developers' },
    { imgSrc: chip,  title: 'AI and ML Engineers Deep Lerning/Machine Vision/NLP' },
    { imgSrc: security,  title: 'Application Security Engineers' },
];

function SpecializeCard() {
  return (
    <>
    <section className='specialize-card-section pad-tp-btm-50 page-width' data-sectionid="specialize-card-section">
        <div className='specialize-content-outer'>
            <div className='specialize-heading-wrapper'>
                <h4 className='h4-35'>Specialized</h4>
                <h2 className='h2-34 m-0'>Specialized Staff We Provide</h2>
            </div>
            <div className='specialize-child-wrapper'>
                {imageBlockData.map((item, index) => (
                    <div key={index} className='specialize-card-outer'>
                        <div className='specialize-image-wrapper'>
                            <img src={item.imgSrc} alt='Group'></img>
                        </div>
                        <div className=''>
                            <p className="m-0">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
</>
  )
}

export default SpecializeCard