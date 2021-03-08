import React from 'react'
import { books } from './books' //named export
import Book from './Book' //default export

const BuyPage = () => {
  return (
    <>
      <div className="buyContainer">
        <section className='leftSide'>
          <div className='search-box-buy'>
            <input className='search-txt-buy' type='text' name='' placeholder='Search'>
            </input>
            <a className='search-btn-buy' href='#'>
              <i className="fas fa-search"></i>
            </a>
          </div>

          <div className="categories">
            <h1>CATEGORIES</h1>


            <h3>Authors</h3>

            <div className="authors">
              <select className="authors">
                <option>Emmanuel Palacio</option>
                <option>Isaac De La Hoz</option>
                <option>Ever Gonzales</option>
                <option>Sebastian Obando</option>
                <option>Hector Orozco</option>
              </select>
            </div>

            <h3 id="categories_2">Genre</h3>

            <div className="categories_2">
              <select className="categories_2">
                <option>Emmanuel Palacio</option>
                <option>Isaac De La Hoz</option>
                <option>Ever Gonzales</option>
                <option>Sebastian Obando</option>
                <option>Hector Orozco</option>
              </select>
            </div>

            <h3 id="categories_2">Price</h3>

            <div className="categories_2">
              <select className="categories_2">
                <option>Emmanuel Palacio</option>
                <option>Isaac De La Hoz</option>
                <option>Ever Gonzalez</option>
                <option>Sebastian Obando</option>
                <option>Hector Orozco</option>
              </select>
            </div>
          </div>
          <button id="button-buy">Submit</button>
        </section>
        <section className='rightSide'>
          <div className="books">
            <section className="booklist">
              {books.map((book) => {
                return <Book key={book.id} {...book}></Book>
              })}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default BuyPage;