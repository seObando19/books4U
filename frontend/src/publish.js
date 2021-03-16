import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PublishPage = () => {
  const [authors, setAuthors] = useState([])
  const [genres, setGenres] = useState([])
  const [publisher, setPublisher] = useState([])
  const loadAuthors = async () => {
    const res = await axios.get('http://localhost:9000/author');
    setAuthors(res.data);
  }
  const loadGenre = async () => {
    const res = await axios.get('http://localhost:9000/genre');
    setGenres(res.data);
  }
  const loadPublisher = async () => {
    const res = await axios.get('http://localhost:9000/publisher');
    setPublisher(res.data);
  }
  useEffect(() => {
    loadAuthors();
    loadGenre();
    loadPublisher();
  }, [])

  return (
    <>
      <section className='publish-main'>
        <div className="publish-box">
          <h1>Publish to new Book</h1>
          <div className="publish-input">
            <div className="publish-input-box">
              <div className="publish-form">
                <input type="text" name='' required />
                <span>Name</span>
              </div>
              <div className="publish-form">
                <input type="text" name='' required />
                <span>Price</span>
              </div>
              <div className="publish-form">
                <input type="text" name='' required />
                <span>Description</span>
              </div>
              <div className="publish-form">
                <input type="text" name='' required />
                <span>URL image</span>
              </div>
            </div>
            <div className="publish-input-box">
            <div className="publish-form">
                <select className="drop-box">
                  {authors.map(author => {
                    return <option>{author.name}</option>
                  })}
                </select>
              <span id="tittle">Author</span>
            </div>
            <div className="publish-form">
                <select className="drop-box">
                  {genres.map(genre => {
                    return <option>{genre.name}</option>
                  })}
                </select>
                <span id="tittle">Genre</span>
            </div>
            <div className="publish-form">
                <select className="drop-box">
                {publisher.map(publisher => {
                    return <option>{publisher.name}</option>
                  })}
                </select>
              <span id="tittle">Publisher</span>
            </div>
          </div>
          </div>
        </div>
        <input className='publish-btn' type="submit" value='publish' />
      </section>
    </>
  );
}

export default PublishPage;