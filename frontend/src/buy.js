import { books } from './books' //named export
import Book from './Book' //default export

const BuyPage = () => {
  return (
    <>
      <h1>BUY PAGE</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </>
  );
}

export default BuyPage;