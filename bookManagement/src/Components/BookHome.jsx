import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookHome() {
    // Dummy data for books
    const [activeTitle, setActiveTitle] = useState(null);
    const [allBooks, setAllBooks] = useState([
        {
            id: "B-001",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Fiction",
            publicationDate: "1925-04-10",
            rating: 4.5,
            stock: 20,
            image: "https://via.placeholder.com/250?text=The+Great+Gatsby"
        },
        {
            id: "B-002",
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian",
            publicationDate: "1949-06-08",
            rating: 4.8,
            stock: 15,
            image: "https://via.placeholder.com/250?text=1984"
        },
        {
            id: "B-003",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Classic",
            publicationDate: "1960-07-11",
            rating: 4.7,
            stock: 10,
            image: "https://via.placeholder.com/250?text=To+Kill+a+Mockingbird"
        },
        {
            id: "B-004",
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Romance",
            publicationDate: "1813-01-28",
            rating: 4.6,
            stock: 25,
            image: "https://via.placeholder.com/250?text=Pride+and+Prejudice"
        }
    ]);

    const [hovered, setHovered] = useState(false); // state to track hover status

    const linkStyle = {
        textDecoration: 'none',
        color: hovered ? 'blue' : 'black', // Change color to blue on hover
    };

    return (
        <>
            {/* <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {allBooks.length > 0 ? (
              allBooks.map((book) => (
                <div className="col mb-5" key={book.id}>
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src={book.image || "https://via.placeholder.com/250"}
                      alt={book.title}
                      height="250px"
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{book.title}</h5>
                        <p className="text-muted">{book.author}</p>
                        <h5 className="text-success">{book.rating}</h5>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <p className="mb-1">Stock: {book.stock}</p>
                      <Link to={`/details`}>
                        <button className="btn btn-success btn-sm me-2">
                          View Details
                        </button>
                        <button className='btn btn-primary btn-sm'>Edit</button>
                                        <button className='btn btn-danger btn-sm ml-2 ms-2 '>Delete</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No books available</p>
            )}
          </div>
        </div>
      </section> */}

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                  
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allBooks.length > 0 ? (
                                    allBooks.map((book, index) => (
                                        <tr key={book.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link
                                                    to={`/details`}
                                                    style={{
                                                        textDecoration: "none", // Removes underline from link
                                                        color: activeTitle === book.id ? "blue" : "black", // Changes color on hover or click
                                                    }}
                                                    onMouseOver={() => setActiveTitle(book.id)} // Change color on hover
                                                    onMouseOut={() => setActiveTitle(null)} // Revert color when not hovering
                                                >
                                                    {book.title}
                                                </Link>
                                                </td>
                                                <td>
                                                    <img
                                                        src={book.image || "https://via.placeholder.com/250"}
                                                        alt={book.title}
                                                        height="100"
                                                        width="100"
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                                                    <button className="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            No books available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    );
}

export default BookHome;
