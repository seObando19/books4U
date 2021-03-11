import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { books } from './books' named export
import Book from './Book' // default export

const BuyPage = () => {

  const [authors, setAuthors] = useState([])
  const [genres, setGenres] = useState([])
  const [books, setBooks] = useState([])
  const loadAuthors = async () => {
    const res = await axios.get('http://localhost:9000/author');
    setAuthors(res.data);
  }
  const loadGenre = async () => {
    const res = await axios.get('http://localhost:9000/genre');
    setGenres(res.data);
  }
  const loadBooks = async () => {
    const res = await axios.get('http://localhost:9000/book')
    console.log(res.data);
    setBooks(res.data)
  }
  useEffect(() => {
    loadAuthors();
    loadGenre();
    loadBooks()
  }, [])
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
                {authors.map(author => {
                  return <option>{author.name}</option>
                })}
              </select>
            </div>

            <h3 id="categories_2">Genre</h3>

            <div className="categories_2">
              <select className="categories_2">
                {genres.map(genre => {
                  return <option>{genre.name}</option>
                })}
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