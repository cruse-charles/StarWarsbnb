import React from 'react';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import airbnbLogo from '../../../../src/assets/airbnb-logo.png'
import linkedInLogo from '../../../../src/assets/linkedin-logo.png'
import githubLogo from '../../../../src/assets/githubicon.png'
import { createContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from './SearchBar';

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
          <a href='https://www.linkedin.com/in/charles-cruse-2ba72ab6/'>
            <img id='linkedin-logo' src={linkedInLogo}/>
          </a>
          <a href='https://github.com/cruse-charles'>
            <img id='github-logo' src={githubLogo}/>
          </a>
        </div>
        <div id='searchbar-container'>
          {/* Anywhere | Anyweek | Add Guests */}
          <SearchBar />
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