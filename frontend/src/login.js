import { Link } from "react-router-dom";


const LoginPage = () => {
  return (
    <>
      <div className="main-login">
        <h1>Login</h1>
        <form action="" method="post">
          <div className="text-field">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="text-field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="pass"><Link to='/forgot'>Forgot password?</Link> </div>
          <input type="submit" value='Login' />
          <span className='sign-up'>
            Don't have an account? <Link to='/signup'><a href="#"> Sign up</a></Link>
          </span>
        </form>
      </div>

    </>
  );
}

export default LoginPage;