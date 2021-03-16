import React from 'react'

const SearchBar = () => {
  return (
    <>
      <form action="http://localhost:9000/searchBar" method="GET">
        <div className='search-box'>
          <input className='search-txt' type='text' name='book-to-search' placeholder='Search' />
          <a className='search-btn' href="http://localhost:3000/buy">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </form>
    </>
  );
}

export default SearchBar;