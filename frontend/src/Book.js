import React from 'react';

const Book = ({image, name, price}) => {
  return (
    <article className='book'>
      <img src={image} alt='book image' />
      <h1>{name}</h1>
      <strong>USD {price}</strong>
    </article>
  )
}

export default Book
