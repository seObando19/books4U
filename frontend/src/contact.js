import React from 'react'

function submit() {
  // alert('Thanks for you message');
  const name = document.getElementById('fullname').innerHTML;
  if (name.isEmpty) {
    alert('Por favor llena los campos mandatorios')
  } else {
    alert('gracias por el mensaje')
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
          <div className="contact-form">
            <h2>Send a message</h2>
            <div className="formBox">
              <div className='inputBox w50'>
                <input type="text" name='' required />
                <span id='fullname'>Full name</span>
              </div>
              <div className='inputBox w50'>
                <input type="text" name='' required />
                <span>Email address</span>
              </div>
              <div className='inputBox w100'>
                <textarea name="" required></textarea>
                <span>Type your message</span>
              </div>
              <div className='inputBox w100'>
                <input id="button1" type="submit" name="" value='Send' onClick={submit} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;