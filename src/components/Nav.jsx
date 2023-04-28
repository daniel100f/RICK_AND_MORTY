import React from "react";
import SearchBar from "./SearchBar";
import style from "../estilos/Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch,  setAccess }) {
  
  const handleLogOut=()=>{

    setAccess(false)
    
  }
  return (
    <div className={style.nav}>
     <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt="Logo"
          className={style.logo}
        />
     
      <div>
       
      </div>
      <div>
        <NavLink to="/about">
          <button className={style.aboutButton}>
            <span>About</span>
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/home">
          <button className={style.homeButton}>
            <span>Home</span>
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/favorites">
          <button className={style.aboutButton}>
            <span>Favorites</span>
          </button>
        </NavLink>
        </div>
      
        <SearchBar onSearch={onSearch} />
        <button className={style.handleLogOut} onClick={handleLogOut}></button>
    </div>
  );
}


export default Nav;
