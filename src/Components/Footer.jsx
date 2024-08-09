import React from 'react'
import Logo from '../images/logo1.jpg';

import phone from '../Icon/Phone.svg';
import email from '../Icon/Email.svg';
import location from '../Icon/location.svg';

import LinkedIn from '../Icon/LinkedIn.svg';
import Facebook from '../Icon/Facebook.svg';
import Instagram from '../Icon/Instagram.svg';
import Twitter from '../Icon/Twitter.svg';
import YouTube from '../Icon/YouTube.svg';

function Footer() {

    const menuData = [
        {
            title: "Company",
            subMenu: [
                { name: "About Us", link: "/about-us" },
                { name: "Success Stories", link: "/success-stories" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Terms & Conditions", link: "/terms-conditions" },
                { name: "Contact Us", link: "/contact-us" }
            ]
        },
        {
            title: "Services",
            subMenu: [
                { name: "Hire Permanent Staff", link: "/hire-permanent-staff" },
                { name: "Staff Augmentation", link: "/staff-augmentation" },
                { name: "Software Outsourcing", link: "/software-outsourcing" },
                { name: "Build Remote Office", link: "/build-remote-office" }
            ]
        },
        {
            title: "How to Start",
            subMenu: [
                { name: "You Asked", link: "/you-asked" },
                { name: "We Proceed", link: "/we-proceed" },
                { name: "Negotiate", link: "/negotiate" },
                { name: "You Get", link: "/you-get" }
            ]
        }
    ];


    const aboutData = [
        { imgSrc: phone, text: '+94 713249222', link: 'tel:+94713249222' },
        { imgSrc: email, text: 'hello@courtney.lk', link: 'mailto:hello@courtney.lk' },
        { imgSrc: location, text: 'Courtney Lanka (Private) Limited Level 35 World Trade Center Colombo 01', link: 'https://www.google.com/maps?q=Courtney+Lanka+(Private)+Limited+Level+35+World+Trade+Center+Colombo+01' },
    ];

    const SocialMedia = [
        { imgSrc: LinkedIn, link: '#' }, { imgSrc: Facebook, link: '#' }, { imgSrc: Instagram, link: '#' }, { imgSrc: Twitter, link: '#' }, { imgSrc: YouTube, link: '#' }
    ]

    return (
        <>
            <section className='footer_section page-width pad-tp-btm-50' data-sectionid="footer">
                <div className='footer-wrapper'>
                    <div className='footer_about_detail-wrapper'>
                        <div className="image-wrapper-outer">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <p className='p15'>Expertly trained, battle-tested, elite software developers on demand</p>
                        {aboutData.map((item, index) => (
                            <a key={index} href={item.link} className='d-flex txt-decoration-none m-1' target="_blank" rel="noopener noreferrer">
                                <img src={item.imgSrc} alt="icon" />
                                <p className='p15 m-0'>{item.text}</p>
                            </a>
                        ))}
                        <p className='p1B'>Follow us</p>
                        <div className='d-flex'>
                            {SocialMedia.map((item, index) => (
                                <a key={index} href={item.link} className='txt-decoration-none' target="_blank" rel="noopener noreferrer">
                                    <img src={item.imgSrc} alt="icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='menu-wrapper-footer'>
                        {menuData.map((menu, index) => (
                            <div key={index} className='menu-section'>
                                <h4 className='menu-title m-0'>{menu.title}</h4> 
                                <ul className='menu-list m-1'>
                                    {menu.subMenu.map((item, subIndex) => (
                                        <li key={subIndex} className='menu-item m-1'>
                                            <a href={item.link} className='p15 txt-decoration-none'>{item.name}</a> 
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer