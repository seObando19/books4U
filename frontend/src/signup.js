import React from 'react'

const SignupPage = () => {
  return (
    <>
      <div className="main-signup">
        <section className='signup-box'>
          <h1>Create Account</h1>
          <div className="signup-text">
            <section className='inputBox'>
              <input type="text" required />
              <div><label>Full name</label></div>
            </section>
          </div>
          <div className="signup-text">
            <section className='inputBox'>
              <input type="text" required />
              <div><label>Email</label></div>
            </section>
          </div>
          <div className="signup-text">
            <section className='inputBox'>
              <input type="password" required />
              <div><label>Password</label></div>
            </section>
          </div>
          <div className="signup-text">
            <section className='inputBox'>
              <input type="password" required />
              <div><label>Confirm password</label></div>
            </section>
          </div>

          <input type="submit" value='Create account' />


        </section>
      </div>
    </>
  );
}

export default SignupPage;