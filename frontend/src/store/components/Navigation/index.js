import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation(){
  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }
  // ORIGINAL AUTH ME CLONE


  // let sessionLinks = (
  //   <>
  //     <ProfileButton user={sessionUser} />
  //     <LoginFormModal />
  //     <NavLink to="/signup">Sign Up</NavLink>
  //   </>
  // );

  return (
    <div className='navigation-bar'>
      <div className='airbnb-logo'>
        Airbnb Logo Here
      </div>
      <div className='searchbar'>
        Search Bar Here
      </div>
      <div>
        {/* <img src='../../../../assets/account-icon.png' alt='account-icon'/> */}
        {/* HOW DO I GET AN IMAGE IN HERE? */}
        {/* <i className="fa-solid fa-user-circle" /> */}
        <ProfileButton />
        <NavLink exact to="/">Home</NavLink>
        {/* {sessionLinks} */}
      </div>
    </div>
  );
}

export default Navigation;