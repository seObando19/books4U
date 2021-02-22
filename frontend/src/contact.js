
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
                <span>Full name</span>
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
                <input type="submit" name="" value='Send' />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <h1 className='c-title'>Contact Us</h1>
      <section className='contact-main'>
        <div className='l-side'>
          <p><i className="far fa-envelope fa-lg"></i>email@email.com</p>
          <p><i className="fas fa-phone-square-alt fa-lg"></i>555-444-333</p>
          <p><i className="fas fa-map-marker-alt fa-lg"></i>742 Evergreen Terrace</p>
        </div>
        <section className='c-box'>
          <div className="r-side">
            <input type="text" placeholder='Full name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Type your message' />
          </div>
        </section>
      </section> */}

    </>
  );
}

export default ContactPage;