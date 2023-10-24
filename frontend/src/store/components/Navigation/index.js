import React from "react";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import airbnbLogo from "../../../../src/assets/airbnb-logo.png";
import linkedInLogo from "../../../../src/assets/linkedin-logo.png";
import githubLogo from "../../../../src/assets/githubicon.png";
import { createContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "./SearchBar";
import { Navbar } from "react-bootstrap";

export const menuContext = createContext();

const MenuContextProvider = (props) => {
  const [menuState, setMenuState] = useState(false);

  return (
    <menuContext.Provider value={{ menuState, setMenuState }}>
      {props.children}
    </menuContext.Provider>
  );
};

function Navigation() {
  return (
    <MenuContextProvider>
      <div id="navigation-wrapper">
        <div className="navigation-bar">
          {/* Section for links to other sits */}
          <div className="airbnb-logo">
            <Link to={"/"}>
              <img id="airbnb-logo" src={airbnbLogo} alt="logo" />
            </Link>
            <a href="https://www.linkedin.com/in/charles-cruse-2ba72ab6/">
              <img id="linkedin-logo" src={linkedInLogo} />
            </a>
            <a href="https://github.com/cruse-charles/StarWarsbnb">
              <img id="github-logo" src={githubLogo} />
            </a>
          </div>

          {/* Searchbar */}
          <div id="searchbar-container">
            <SearchBar />
          </div>

          {/* Login/Signup */}
          <div id="profile-button-container">
            <ProfileButton />
          </div>
        </div>
      </div>
    </MenuContextProvider>
  );
}

export default Navigation;
