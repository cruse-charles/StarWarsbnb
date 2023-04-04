import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks = (
    <>
      <div><LoginFormModal /></div>
      <div><SignupFormModal /></div>
    </>
  );
  

  return (
    <>
      <button className='account-button' onClick={toggleMenu}>
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