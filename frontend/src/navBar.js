import React from 'react'
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

function NavBar() {

  const responseGoogle = (res) => {
    console.log(res);
  }
  return (
    <>
      <nav>
        <input type="checkbox" className='burger-check' id="check" />
        <ul className="nav_buttons">
          <li><Link to='/' className="nav_button">HOME</Link></li>
          <li><Link to='/buy' className="nav_button">BUY</Link></li>
          <li><Link to='/donate' className="nav_button">DONATE</Link></li>
          <li><Link to='/contact' className="nav_button">CONTACT</Link></li>
          {/* <li><div className='login-box'>
            <Link to='/login' className="login-text">Log in</Link>
          </div>
          </li> */}
          <li>
          <GoogleLogin
            clientId="67101201099-e24gt7bsr8ormhrd8kf17avkpfnb8dkg.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
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
