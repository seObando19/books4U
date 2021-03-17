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
    <form action="http://localhost:9000/book" method="post">
      <section className='publish-main'>
        <div className="publish-box">
          <h1>Publish to new Book</h1>
          <div className="publish-input">
            <div className="publish-input-box">
              <div className="publish-form">
                <input type="text" name='name' required />
                <span>Name</span>
              </div>
              <div className="publish-form">
                <input type="text" name='price' required />
                <span>Price</span>
              </div>
              <div className="publish-form">
                <input type="text" name='description' required />
                <span>Description</span>
              </div>
              <div className="publish-form">
                <input type="text" name='image' required />
                <span>URL image</span>
              </div>
            </div>
            <div className="publish-input-box">
            <div className="publish-form">
                <select className="drop-box" name="author">
                  {authors.map(author => {
                    return <option value={author._id}>{author.name}</option>
                  })}
                </select>
              <span id="tittle">Author</span>
            </div>
            <div className="publish-form">
                <select className="drop-box" name="genre">
                  {genres.map(genre => {
                    return <option value={genre._id}>{genre.name}</option>
                  })}
                </select>
                <span id="tittle">Genre</span>
            </div>
            <div className="publish-form">
                <select className="drop-box" name="publisher">
                {publisher.map(publisher => {
                    return <option value={publisher._id}>{publisher.name}</option>
                  })}
                </select>
              <span id="tittle">Publisher</span>
            </div>
          </div>
          </div>
        </div>
        <input className='publish-btn' type="submit" value='publish' />
      </section>
    </form>
  );
}

export default PublishPage;