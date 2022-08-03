import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="A pinch of passion in every dish" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_hotDrinks  flex__center">
        <p className="app__specialMenu-menu_heading">Hot Drinks</p>
        <div className="app__specialMenu_menu_items">
        {data.hotDrinks.map((hotDrinks, index) => (
            <MenuItem key={hotDrinks.title + index} title={hotDrinks.title} price={hotDrinks.price} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_coffee  flex__center">
        <p className="app__specialMenu-menu_heading">Coffees</p>
        <div className="app__specialMenu_menu_items">
          {data.coffee.map((coffee, index) => (
            <MenuItem key={coffee.title + index} title={coffee.title} price={coffee.price} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button" style={{borderRadius: "70px"}}>View More</button>
    </div>
  </div>
);

export default SpecialMenu;