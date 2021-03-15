import React from 'react'

function submit() {
  const name = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const text_message = document.getElementById('message').value;

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    if (name !== '' && email !== '' && text_message !== ''){
      alert("Thanks for your message");
    }
  } else {
    return false;
  }
}

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
                <input type="text" name='fullname' id="full-name" required />
                <span id='fullname'>Full name</span>
              </div>
              <div className='inputBox w50'>
                <input type="email" name='email' id="email" required />
                <span>Email address</span>
              </div>
              <div className='inputBox w100'>
                <textarea name="message" id="message" required></textarea>
                <span>Type your message</span>
              </div>
              <div className='inputBox w100'>
                <input id="button1" type="submit" name="" value='Send' onClick={submit} />
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
