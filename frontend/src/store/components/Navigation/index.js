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
        {/* <img src={require('../../../assets/airbnb-logo.png')}/> */}
        Airbnb Logo Here
      </div>
      <div className='searchbar'>
        Search Bar Here
      </div>
      <div>
        {/* <img src={require('../../../assets/account-icon.png')}/> */}
        {/* <img src={require('../../../assets/account-icon2.png')} alt='logo'/> */}
        {/* Above is the image syntax needed */}
        <ProfileButton />
      </div>
    </div>
  );
}

export default Navigation;