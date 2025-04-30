import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faLocationDot,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// import NavBar from "../Nav/Nav";
import MobileNav from "../Nav/MobileNav";
import { useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "../Nav/Nav";

const Header = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(query);
    // Implement the search functionality here
  };
  const isTablet = useMediaQuery("(max-width: 1024px)"); // Tablet screens
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  console.log(toggleDrawer);

  return (
    <div>
      <div className="nav-container">
        {isTablet && (
          <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        )}
        <div className="search-container">
          <img src="/wp-content/themes/edsteel/assets/logo.svg" alt="Logo" />
          <form className="search-bar">
            <input onChange={handleInputChange} placeholder="Search"></input>
            <button onClick={handleSearch} className="search-button">
              <FontAwesomeIcon className="logo" icon={faSearch} size="2x" />
            </button>
          </form>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <FontAwesomeIcon icon={faLightbulb} size="1x" />
            <span>Steels Community</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faLocationDot} size="1x" />
            <span>Contact Details</span>
          </div>
        </div>
      </div>
      {!isTablet && <Nav />}
      {isTablet && <MobileNav open={open} toggleDrawer={toggleDrawer} />}
    </div>
  );
};

export default Header;
