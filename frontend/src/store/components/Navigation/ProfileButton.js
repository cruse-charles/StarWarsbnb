import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import LoginFormModal from "../LoginFormModal";

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
      if(e.target.innerText === 'Log In') {
        return
      }else{
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks = (
    <>
      <LoginFormModal />
      <NavLink to="/signup">Sign Up</NavLink>
    </>
  );
  

  return (
    <>
      <button className='account-button' onClick={openMenu}>
        <i id='hamburger' className="fa-sharp fa-solid fa-bars" />
        <i id='account-icon' className="fa-solid fa-user" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{sessionLinks}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;