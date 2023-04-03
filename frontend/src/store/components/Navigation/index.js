import React from 'react';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation(){
  return (
    <div className='navigation-bar'>
      <div className='airbnb-logo'>
        {/* <img src={require('../../../../src/assets/airbnb-logo.png')}/> */}
        {/* CANNOT GET IMAGES IMPORTED INTO HERE */}
        Airbnb Logo Here
      </div>
      <div className='searchbar'>
        Search Bar Here
      </div>
      <div>
        {/* <img src={require('../../../assets/account-icon.png')}/> */}
        {/* Above is the image syntax needed */}
        <ProfileButton />
      </div>
    </div>
  );
}

export default Navigation;