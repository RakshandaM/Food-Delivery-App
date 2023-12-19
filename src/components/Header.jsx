import { useState } from "react";
import { LOGO_URL } from "./utils/contants";

const Header = () => {

  const[login,setLogin]=useState("Login")
  
  function handleClick(){
    login==="Login" ? setLogin("Logged out") : setLogin("Login")
  }
    return (
      <div className="header">
        <div className='logo-container'>
          <img className="logo" alt="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login-btn" onClick={handleClick}>{login} </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;