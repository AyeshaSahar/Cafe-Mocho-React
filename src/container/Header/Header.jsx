import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Creativity is always on our menu ;)</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lorem non nibh consequat bibendum. Ut laoreet viverra viverra.</p>
      <button type="button" className="custom__button" style={{borderRadius: "70px"}}>Explore Our Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" style={{borderRadius: "50px"}}/>
    </div>
  </div>
);

export default Header;
