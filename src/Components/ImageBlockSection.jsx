import React from 'react';
import groupImg from '../images/Group.png';
import groupTwoImg from '../images/Group2.png';
import handshakeImg from '../images/handshake.png';
import medalImg from '../images/medal.png';

const imageBlockData = [
    { imgSrc: groupImg, number: '01', title: 'Ask You' },
    { imgSrc: groupTwoImg, number: '02', title: 'Define Scope' },
    { imgSrc: handshakeImg, number: '03', title: 'Negotiate' },
    { imgSrc: medalImg, number: '04', title: 'YOU GET' },
];

function ImageBlockSection() {
    return (
        <>
            <section className='image-block-section pad-tp-btm-50' data-sectionid="image-block-section">
                <div className='image-block-main-wrapper page-width text-center'>
                    <h4 className='h3b'>How To Start</h4>
                    <h2 className='m-0'>Easy Process</h2>
                    <p className='p15'>We specialize in helping you build a team of expert developers, testers, and leaders.</p>
                    <div className='image-block-child-wrapper'>
                        {imageBlockData.map((item, index) => (
                            <div key={index} className='image-block-outer-card'>
                                <div className='image-wrapper'>
                                    <img src={item.imgSrc} alt='Group'></img>
                                </div>
                                <div className='content-heading-flex'>
                                    <h2 className="m-0">{item.number}</h2>
                                    <h3 className="m-0">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ImageBlockSection;
