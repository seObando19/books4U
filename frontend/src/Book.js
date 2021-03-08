import React from 'react';

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='book image' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
