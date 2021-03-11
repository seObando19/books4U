import React from 'react';

const Book = ({image, name}) => {
  return (
    <article className='book'>
      <img src={image} alt='book image' />
      <h1>{name}</h1>
    </article>
  )
}

export default Book
