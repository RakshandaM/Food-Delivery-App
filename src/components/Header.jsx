import { LOGO_URL } from "./utils/contants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;