import { useState } from "react";
import { LOGO_URL } from "./utils/contants";
import { Link } from "react-router-dom";

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
          <li><Link to ="/">Home</Link> </li>
            <li> <Link to = "/about">About</Link> </li>
            <li><Link to = "/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={handleClick}>{login} </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;