import React from 'react';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import airbnbLogo from '../../../../src/assets/airbnb-logo.png'
import { createContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const menuContext = createContext()

const MenuContextProvider = (props) => {
  const [menuState, setMenuState] = useState(false)
  return (
    <menuContext.Provider value={{menuState, setMenuState}}>
      {props.children}
    </menuContext.Provider>
  )
}

function Navigation(){
  return (
    <MenuContextProvider>
    <div id='navigation-wrapper'>
      <div className='navigation-bar'>
        <div className='airbnb-logo'>
          <Link to={'/'}>
            <img id='airbnb-logo' src={airbnbLogo} alt='logo'/>
          </Link>
        </div>
        <div id='searchbar'>
          Anywhere | Anyweek | Add Guests
        </div>
        <div id='profile-button-container'>
          <ProfileButton />
        </div>
      </div>
    </div>
    </MenuContextProvider>
  );
}

export default Navigation;