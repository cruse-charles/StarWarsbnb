import React, { useState, useEffect } from "react";
// import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import LoginFormModal from "../LoginFormModal";
// import SignupFormPage from "../SignupFormModal/SignupForm";
import SignupFormModal from "../SignupFormModal";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
// debugger
      if(e.target.innerText === 'Log In') {
        return
      }else if(e.target.innerText === 'Sign Up') {
        return
      }else{
        setShowMenu(false);
      }
    };

    // document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks = (
    <>
      <div><LoginFormModal /></div>
      {/* <NavLink to="/signup">Sign Up</NavLink> */}
      <div><SignupFormModal /></div>
    </>
  );
  

  return (
    <>
      <button className='account-button' onClick={openMenu}>
        <i id='hamburger' className="fa-sharp fa-solid fa-bars" />
        <i id='account-icon' className="fa-solid fa-user" />
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div>{sessionLinks}</div>
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;