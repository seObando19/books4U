import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="nav_buttons">
        <Link to='/' className="nav_button">HOME</Link>
        <Link to='/buy' className="nav_button">BUY</Link>
        <Link to='/donate' className="nav_button">DONATE</Link>
        <Link to='/contact' className="nav_button">CONTACT</Link>
      </nav>
      <div className='login-box'>
        <Link to='/login' className="login-text">Log in</Link>
      </div>
    </>
  );
}

export default NavBar;
