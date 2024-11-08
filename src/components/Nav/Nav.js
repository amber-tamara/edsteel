import React, { useState } from "react";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faLocationDot,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(query);
    // Implement the search functionality here
  };
  return (
    <div className="nav-container">
      <div className="search-container">
        <img src="/images/logo.svg" alt="Logo" />
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
  );
};

export default Nav;
