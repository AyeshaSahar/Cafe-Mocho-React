import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.CM} alt="CM_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button" style={{borderRadius: "70px"}}>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.shake} alt="about_knife" style={{borderRadius: "70px"}} />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Specialities</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lorem eu tellus convallis commodo vitae et lacus. Nam sed est semper, feugiat neque non, sollicitudin erat.</p>
        <button type="button" className="custom__button" style={{borderRadius: "70px"}}>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;