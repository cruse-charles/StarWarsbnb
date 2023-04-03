import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import LoginFormModal from "../LoginFormModal";

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const [showMenu, setShowMenu] = useState(false);
  
//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };
  
//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = () => {
//       setShowMenu(false);
//     };

//     document.addEventListener('click', closeMenu);
  
//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//   };

//   return (
//     <>
//       <button onClick={openMenu}>
//         <i className="fa-solid fa-user-circle" />
//       </button>
//       {showMenu && (
//         <ul className="profile-dropdown">
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>
//             <button onClick={logout}>Log Out</button>
//           </li>
//         </ul>
//       )}
//     </>
//   );
// }

// export default ProfileButton;




function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
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
      <button onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <li>Log in</li>
          <li>Sign up</li> */}
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