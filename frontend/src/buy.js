import { books } from './books' //named export
import Book from './Book' //default export
import image from '../src/images/cien-años-de-soledad.jpg'

const BuyPage = () => {
  return (
    <>
      <div className="line_1"></div>
      <div className='search-box-buy'>
        <input className='search-txt' type='text' name='' placeholder='Search'>
        </input>
        <a className='search-btn' href='#'>
          <i className="fas fa-search"></i>
        </a>
      </div>

      <div className="categories">
        <h1>CATEGORIES</h1>
      </div>

      <h3 id="authors">Authors</h3>

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

      <button id="button-buy">Submit</button>

      <div className="books">
        <img src={image} id='cienañosdesoledad'/>
      </div>
    </>
  );
}

export default BuyPage;