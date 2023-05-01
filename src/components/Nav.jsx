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
        <NavLink to="/home">
        <span className={style.homeButton}>Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/about">
          
          <span className={style.aboutButton}>About</span>
        </NavLink>
      </div>
      
      <div>
        <NavLink to="/favorites">
        <span className={style.favorites} >Favorites</span>
        </NavLink>
        </div>
      
        <SearchBar onSearch={onSearch} />
        
        <buttom className={style.handleLogOut} onClick={handleLogOut}>LogOut</buttom>
    </div>
  );
}


export default Nav;
