import React from 'react'

const SearchBar = () => {
  return (
    <>
      <form action="http://localhost:9000/searchBar" method="POST">
        <div className='search-box'>
          <input className='search-txt' type='text' name='book-to-search' placeholder='Search' />
          <a className='search-btn'>
            <input type="submit" value='Send' id="button-home" />
          </a>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
