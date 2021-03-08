import React from 'react'

const DonatePage = () => {
  return (
    <>
      <section className='donate-main'>
        <div className="donate-box">
          <h1>Your info</h1>
          <div className="donate-form">
            <input type="text" name='' required />
            <span>Full name</span>
          </div>
          <div className="donate-form">
            <input type="text" name='' required />
            <span>Email</span>
          </div>
          <div className="donate-form">
            <input type="text" name='' required />
            <span>Book to donate</span>
          </div>
        </div>
        <input className='donate-btn' type="submit" value='Donate' />
      </section>
    </>
  );
}

export default DonatePage;