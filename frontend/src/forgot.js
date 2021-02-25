
const ForgotPage = () => {
  return (
    <>
      <div className="main-forgot">
        <section className='forgot-box'>
          <h1>Enter your email</h1>
          <div className="forgot-text">
            <input type="text" required />
          </div>
          <div className="forgot-aux">
            <input type="submit" value='Recover password' />
          </div>

        </section>
      </div>
    </>
  );
}

export default ForgotPage;