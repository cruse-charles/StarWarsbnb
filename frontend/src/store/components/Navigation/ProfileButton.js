// import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { menuContext } from ".";
import { useContext } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ProfileButton() {
  const dispatch = useDispatch();
  const {menuState, setMenuState} = useContext(menuContext) 
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()
  
  const userId = useSelector(state => state.session?.user?.id)

  // Toggle modal state
  const toggleMenu = () => {
    setMenuState(!menuState)
  };

  //logout user
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    toggleMenu();
  };

  //redirect to user's profile
  const routeChange = () => {
    if(userId){
      let path = `/users/${userId}`;
      history.push(path);
    }
  }

  //Buttons for signup/login if there is no user
  let sessionLinks
  if(!sessionUser) {
    sessionLinks = (
      <>
          <div id='login-button'><LoginFormModal /></div>
          <div id='signup-button'><SignupFormModal /></div>
      </>
    );
  }

  //Buttons to see profile and logout if there is a user
  let userButtons
  if(sessionUser) {
    userButtons = (
      <>
      <div>
        <div onClick={routeChange} id='trips-button'>Trips</div><br></br>
        <div onClick={logout} id='logout-button'>Log Out</div>
      </div>
      </>
    )
  }
  

  return (
    <>
      <button className='account-button' onClick={toggleMenu}>
        <i id='hamburger' className="fa-sharp fa-solid fa-bars fa-lg" />
        <i id='account-icon' className="fa-solid fa-user fa-lg" />
      </button>

      {/* Seleccting either login/sign up buttons or profile/logout buttons */}
      {menuState && (
        <div id="profile-dropdown">
            {sessionLinks}
            {userButtons}
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