import React from 'react'

const ContactPage = () => {
  return (
    <>
      <section className='contact-main'>
        <div className="contact-container">
          <section className="contact-info">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><i className="far fa-envelope fa-lg"></i>email@email.com</span>
              </li>
              <li>
                <span><i className="fas fa-phone-square-alt fa-lg"></i>555-444-333</span>
              </li>
              <li>
                <span><i className="fas fa-map-marker-alt fa-lg"></i>742 Evergreen Terrace</span>
              </li>
            </ul>
          </section>
	  <form action="http://localhost:9000/contact" method="POST">
          <div className="contact-form">
            <h2>Send a message</h2>
            <div className="formBox">
              <div className='inputBox w50'>
                <input type="text" name='fullname' required />
                <span id='fullname'>Full name</span>
              </div>
              <div className='inputBox w50'>
                <input type="email" name='email' required />
                <span>Email address</span>
              </div>
              <div className='inputBox w100'>
                <textarea name="message" required></textarea>
                <span>Type your message</span>
              </div>
              <div className='inputBox w100'>
                <input id="button1" type="submit" name="" value='Send' />
              </div>
            </div>
          </div>
  	  </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
