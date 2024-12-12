import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Importing for URL params

function BookDetails() {
  const { bookId } = useParams();  // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Simulating a delay like fetching from an API with dummy data
    const fetchBookDetails = () => {
      const dummyBook = {
        id: bookId,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        publicationDate: "1925-04-10",
        price: "39.99",
        originalPrice: "45.00",
        description: "A classic novel of the Roaring Twenties that explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age or the 'Roaring Twenties' in the United States.",
        image: "https://via.placeholder.com/250?text=The+Great+Gatsby",
        rating: 4.5,
        stock: 20
      };

      // Simulating an async call
      setTimeout(() => {
        setBook(dummyBook);
      }, 1000); // Simulate 1 second delay (similar to fetching data)
    };

    fetchBookDetails();
  }, [bookId]);  // The useEffect hook will run when bookId changes

  if (!book) {
    return <div>Loading...</div>; // Show loading state while the data is being fetched
  }

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            {/* Display Book Image */}
            <div className="col-md-6">
              <img
                className="card-img-top"
                src={book.image || 'https://via.placeholder.com/250'}  // Use placeholder if no image
                alt={book.title}
                height="400px"
                width="250px"
              />
            </div>

            {/* Display Book Details */}
            <div className="col-md-6">
              <div className="small mb-1">{book.author}</div>  {/* Author name */}
              <h1 className="display-5 fw-bolder">{book.title}</h1>  {/* Book title */}
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">${book.originalPrice}</span>
                <span>${book.price}</span> {/* Current price */}
              </div>
              <p className="lead">{book.description}</p>  {/* Book description */}
              <div className="d-flex">
                {/* Add to Wishlist & Add to Cart buttons */}
                <button className="btn btn-outline-dark flex-shrink-0 me-3" type="button">
                  <i className="bi-cart-fill me-1"></i>
                  Description
                </button>
                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                  <i className="bi-cart-fill me-1"></i>
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookDetails;
