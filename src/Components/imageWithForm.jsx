import React, { useState } from 'react';
import imageTxt from '../images/contactImage.png';
import style from '../css/imageWithForm.module.css';
import arrowIconWhite from '../Icon/build-header-white-arrow.svg'

function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    projectDetail: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the formData to your backend
    console.log(formData);
  };

  return (
    <section className={`${style.imageWithForm} page-width image-text-overlay `} data-sectionid='image-form-overlay'>
    <div className={style.leftImgTxtWrapper}>
        <div className={style.imgWrapperImgTxt}>
            <img src={imageTxt} alt='meeting'></img>
        </div>
    </div>
    <form className={style.contactform} onSubmit={handleSubmit}>
      <h2>Connect With Your Next Great Hire Today!</h2>
      <div className={style.companyAndName}>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder='Enter Your Company Name'
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter Your Name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={style.phoneandemail}>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Enter Your Phone Number'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div class={style.inputcheckbox}>
        <label htmlFor="projectDetail">Project Detail</label>
        <textarea
          id="projectDetail"
          name="projectDetail"
          placeholder='Enter Your Project Details'
          value={formData.projectDetail}
          onChange={handleChange}
        />
      </div>
      <div class={style.checkbox}>
        
          <input class={style.checkboxinput} type="checkbox" id="privacyPolicy" />
          <label class={style.checkboxlabel} htmlFor="privacyPolicy">
            By sending this form I confirm that I have read and accept the
            <a href="#">Privacy Policy</a>
          </label>
       
      </div>
      <button class="button" type="submit">GET CONSULTATION
      <img src={arrowIconWhite}  alt="Arrow Build" />
      </button>
    </form>
    </section>
  );
}

export default ContactForm;

