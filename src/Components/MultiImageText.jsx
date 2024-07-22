import React from 'react';
import cubeImage from '../images/cube1.jpg';
import softwareImage from '../images/software-application1.png';
import technicalImage from '../images/technical-support1.jpg';

const imageTextData = [
  {
    imgSrc: cubeImage,
    imgAlt: 'Cube',
    title: 'Architect your Solution',
    text: 'Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.',
  },
  {
    imgSrc: softwareImage,
    imgAlt: 'Software',
    title: 'Engineer your Solution',
    text: 'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.',
  },
  {
    imgSrc: technicalImage,
    imgAlt: 'Technical Support',
    title: 'ReEngineer your Business Process',
    text: 'Bolstered by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.',
  },
];

function MultiImageText() {
  return (
    <>
      <section className='multi-image-text page-width' data-sectionid='multi-image-text'>
        {imageTextData.map((item, index) => (
          <div key={index} className='multi-image-text-container'>
            <div className='image-wrapper'>
              <img src={item.imgSrc} alt={item.imgAlt}></img>
            </div>
            <div className='content-wrapper'>
              <h3 className='m-0'>{item.title}</h3>
              <p className='p15'>{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default MultiImageText;
