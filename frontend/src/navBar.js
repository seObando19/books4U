import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav>
        <input type="checkbox" className='burger-check' id="check" />
        <ul className="nav_buttons">
          <li><Link to='/' className="nav_button">HOME</Link></li>
          <li><Link to='/buy' className="nav_button">BUY</Link></li>
          <li><Link to='/donate' className="nav_button">DONATE</Link></li>
          <li><Link to='/contact' className="nav_button">CONTACT</Link></li>
          <li><div className='login-box'>
            <Link to='/login' className="login-text">Log in</Link>
          </div>
          </li>
        </ul>
        <label htmlFor="check" className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </label>

      </nav>
    </>
  );
}

export default NavBar;
