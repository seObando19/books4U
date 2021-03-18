import React from 'react'
import { CSVReader } from 'react-papaparse'

function donate () {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const book = document.getElementById('book-to-donate').value;

  if (name !== '' && email !== '' && book !== '') {
    alert("Donated book");
  }
}

const DonatePage = () => {
  return (
    <>
      <form action="http://localhost:9000/donate" method="POST">
        <section className='donate-main'>
            <div className="donate-box">
              <h1>Your info</h1>
              <div className="donate-form">
                <input type="text" name='name' id="name" required />
                <span>Full name</span>
              </div>
              <div className="donate-form">
                <input type="email" name='email' id="email" required />
                <span>Email</span>
              </div>
              <div className="donate-form">
                <input type="text" name='book-to-donate' id="book-to-donate" required />
                <span>Book to donate</span>
              </div>
              <div className="drag-file">
                <CSVReader>Click to upload.</CSVReader>
              </div>
            </div>
          <input className='donate-btn' type="submit" value='Donate' onClick={donate} />
        </section>
      </form>
    </>
  );
}

export default DonatePage;