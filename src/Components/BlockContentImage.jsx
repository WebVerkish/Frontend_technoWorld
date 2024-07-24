import React from 'react'

import dedicatedTeam from '../images/dedicatedTeam.png';
import augumantation from '../images/staff-augumantation.png';
import outsourcing from '../images/outsourcing.png';
import office from '../images/remote-office.png';

const imageBlockData = [
    { imgSrc: dedicatedTeam, number: 'Dedicated Teams', title: 'Find your next team member' },
    { imgSrc: augumantation, number: 'Staff Augmentation', title: 'Build a distributed development team' },
    { imgSrc: outsourcing, number: 'Software Outsourcing', title: 'End-to-End Software Development Outsourcing Solutions' },
    { imgSrc: office, number: 'Remote Office', title: 'Open your own remote development center and grow your business' },
];

function BlockContentImage() {
    return (

        <>
            <section className='block-content-image-section pad-tp-btm-50' data-sectionid="block-content-image-section">
                <div className='block-content-image-outer page-width '>
                    <div className='text-heading-wrapper'>
                        <h4 className='h4'>Expertise</h4>
                        <h2 className='m-0'>Hire Permanent and Remote Developers</h2>
                        <p className='p15'>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
                    </div>
                    <div className='block-content-image-child-wrapper'>
                        {imageBlockData.map((item, index) => (
                            <div key={index} className='block-content-image-outer-card'>
                                <div className='block-content-image-wrapper'>
                                    <img src={item.imgSrc} alt='Group'></img>
                                </div>
                                <div className=''>
                                    <h3 className="m-0">{item.number}</h3>
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

export default BlockContentImage