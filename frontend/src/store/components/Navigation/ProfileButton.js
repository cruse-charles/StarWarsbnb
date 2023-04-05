// import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { menuContext } from ".";
import { useContext } from "react";

function ProfileButton() {
  const dispatch = useDispatch();
  // const [showMenu, setShowMenu] = useState(false);
  const {menuState, setMenuState} = useContext(menuContext) 
  const sessionUser = useSelector(state => state.session.user);
  
  const toggleMenu = () => {
    // setShowMenu(!showMenu);
    setMenuState(!menuState)
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    toggleMenu()
  };

  let sessionLinks
  if(!sessionUser) {
    sessionLinks = (
      <>
        <div><LoginFormModal /></div>
        <div><SignupFormModal /></div>
      </>
    );
  }

  let logoutButton
  if(sessionUser) {
    logoutButton = (
      <>
      <div>
        {/* <button>Messages</button><br></br> */}
        <button>Trips</button><br></br>
        <button>Wishlists</button><br></br>
        {/* <button>Account</button><br></br> */}
        <button onClick={logout}>Log Out</button>
      </div>
      </>
    )
  }
  

  return (
    <>
      <button className='account-button' onClick={toggleMenu}>
        <i id='hamburger' className="fa-sharp fa-solid fa-bars" />
        <i id='account-icon' className="fa-solid fa-user" />
      </button>
      {/* {showMenu && ( */}
      {menuState && (
        <div className="profile-dropdown">
          <div>{sessionLinks}</div>
          <div>
            {/* <button onClick={logout}>Log Out</button> */}
            {logoutButton}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;






























// CODE I HAD BEFORE TRYING TO CHANGE PROFILE BUTTON


// function ProfileButton() {
//   const dispatch = useDispatch();
//   const [showMenu, setShowMenu] = useState(false);
//   const sessionUser = useSelector(state => state.session.user);
  
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//     toggleMenu()
//   };

//   let sessionLinks
//   if(!sessionUser) {
//     sessionLinks = (
//       <>
//         <div><LoginFormModal /></div>
//         <div><SignupFormModal /></div>
//       </>
//     );
//   }

//   let logoutButton
//   if(sessionUser) {
//     logoutButton = (
//       <>
//       <button onClick={logout}>Log Out</button>
//       </>
//     )
//   }
  

//   return (
//     <>
//       <button className='account-button' onClick={toggleMenu}>
//         <i id='hamburger' className="fa-sharp fa-solid fa-bars" />
//         <i id='account-icon' className="fa-solid fa-user" />
//       </button>
//       {showMenu && (
//         <div className="profile-dropdown">
//           <div>{sessionLinks}</div>
//           <div>
//             {/* <button onClick={logout}>Log Out</button> */}
//             {logoutButton}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ProfileButton;