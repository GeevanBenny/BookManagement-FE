import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ onBookAdded }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [isbn, setIsbn] = useState('');
    const [genre, setGenre] = useState('Fiction');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const book = {
            title,
            author,
            publicationDate,
            isbn,
            genre,
            rating
        };

        axios.post('http://localhost:8080/api/books', book)
            .then(response => {
                onBookAdded(response.data);
                setTitle('');
                setAuthor('');
                setPublicationDate('');
                setIsbn('');
                setGenre('Fiction');
                setRating(1);
            })
            .catch(error => console.error("There was an error creating the book!", error));
    };

    return (
        <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h2 className="text-center mb-4">Add a Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label>Title</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className="form-group mb-3">
                            <label>Author</label>
                            <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                        </div>
                        <div className="form-group mb-3">
                            <label>Publication Date</label>
                            <input type="date" className="form-control" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} required />
                        </div>
                        <div className="form-group mb-3">
                            <label>ISBN</label>
                            <input type="text" className="form-control" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                        </div>
                        <div className="form-group mb-3">
                            <label>Genre</label>
                            <select className="form-control" value={genre} onChange={(e) => setGenre(e.target.value)}>
                                <option>Fiction</option>
                                <option>Non-Fiction</option>
                                <option>Mystery</option>
                                <option>Fantasy</option>
                                <option>Romance</option>
                                <option>Sci-Fi</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label>Rating</label>
                            <input type="number" className="form-control" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-3">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default BookForm;
