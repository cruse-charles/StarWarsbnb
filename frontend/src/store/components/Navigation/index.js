import React from 'react';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import airbnbLogo from '../../../../src/assets/airbnb-logo.png'
import { createContext, useState } from 'react';

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
    <div className='navigation-bar'>
      <div className='airbnb-logo'>
        <img id='airbnb-logo' src={airbnbLogo} alt='logo'/>
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
    </MenuContextProvider>
  );
}

export default Navigation;