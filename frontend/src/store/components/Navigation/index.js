import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation(){
  // const sessionUser = useSelector(state => state.session.user);

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