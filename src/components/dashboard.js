import React, { useState } from 'react';
import './dashboard.css';

  export const Dashboard = () => {
  const [books, setBooks] = useState([
    
    { id: 1, name: 'Untamed State', author: 'John Doe', price: 10.99, description: 'A classic novel', category: 'Fiction' },
    { id: 2, name: 'Another Book', author: 'Jane Doe', price: 12.99, description: 'Another classic', category: 'Non-Fiction' },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

    return(
        <div className='main'>
            <div className='split-left'>
            <h1>Welcome to Your #1 Online<br/> Book Store</h1>
            <div className='row1'>
                <h2>A room without books is like a  body without a soul.</h2>
            </div>
            
            <div className='row2'>
                <h2>Find a Book</h2>
                <br/>
                <form>
                    <input type='text' placeholder='Search for a book...'/>
                    <button type='submit'>Search</button>
                    <p>Sort by: <a href='#' style={{textDecoration:'none', color: 'white'}}>Newest</a> | <a href='#' style={{textDecoration:'none', color: 'white'}}>Oldest</a> | <a href='#' style={{textDecoration:'none', color: 'white'}}>Bestsellers</a></p>
                    <p>Filter by: <a href='#' style={{textDecoration:'none', color: 'white'}}>Author</a> | <a href='#' style={{textDecoration:'none', color: 'white'}}>Genre</a></p>
                    <p>View: <a href='#' style={{textDecoration:'none', color: 'white'}}>Grid</a> | <a href='#' style={{textDecoration:'none', color: 'white'}}>List</a></p>
                    <p>Language: <a href='#' style={{textDecoration:'none', color: 'white'}}>English</a> | <a href='#' style={{textDecoration:'none', color: 'white'}}>Spanish</a> | <a href='#' style={{textDecoration:'none', color: 'white'}}>French</a></p>
                </form>
                <div className='books'>
                    <h2>Book List</h2>
                    <ul className='booksR1'>
                        <li>
                            <img src='cv1.jpg' alt=''/>
                            <p>Book ID: bA01</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $10.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                            <br/><br/>
                            <img src='cv2.jpg' alt=''/>
                            <p>Book ID: bA02</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $10.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
                        <br/>
                        <li>
                            <img src='cv3.jpg' alt='Book 2'/>
                            <p>Book ID: bA03</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $12.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
        
                    </ul>
                    <ul className='booksR2'>
                        <li>
                            <img src='cv4.jpg' alt=''/>
                            <p>Book ID: bA04</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $10.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
                        <br/>
                        <li>
                            <img src='cv5.jpg' alt='Book 2'/>
                            <p>Book ID: bA05</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $12.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
                        <br/>
                        <li>
                            <img src='cv11.jpg' alt='Book 3'/>
                            <p>Book ID: bA06</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $13.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
                    </ul>

                    <ul className='booksR3'>
                        <li>
                            <img src='cv7.jpg' alt=''/>
                            <p>Book ID: bA07</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $10.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
                        <br/>
                        <li>
                            <img src='cv8.jpg' alt='Book 2'/>
                            <p>Book ID: bA08</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $12.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
                        <br/>
                        <li>
                            <img src='cv9.jpg' alt='Book 3'/>
                            <p>Book ID: bA09</p>
                            <p>Book Name: Untammed State</p>
                            <p>Author: John Doe</p>
                            <p>Category: Fiction</p>
                            <p>Price: $13.99</p>
                            <p>Description: A classic novel by J. Doe.</p>
                            <br/>
                            <button onClick={() => alert('Add to cart')}>Add to Cart</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Update book')}>Update</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => alert('Delete book')}>Delete</button>
                        </li>
                    </ul>
                    <br/>
                    <div/>
            
                    <div className='bgimg'>
                    </div>
                    <div className='bgimg2'>
                    </div>
                    <div className='bgimg3'>
                    </div> 
                    <div className='bgimg4'>
                    </div>
                    <div className='bgimg5'>
                    </div>
                    <div className='bgimg6'>
                    </div>
                </div>
                <div className='sidebar-logout'></div>
                <div className='sidebar-cart'></div>
                <div className='sidebar-help-center'></div>
                <div className='sidebar-terms'></div>
                <div className='sidebar-privacy'></div>
                <div className='sidebar-cookie-policy'></div>
                <div className='sidebar-returns'></div>
                <div className='sidebar-shipping'></div>
                <div className='sidebar-returns-policy'></div>
                <div className='sidebar-returns-refunds'></div>
                <div className='sidebar-returns-exchange'></div>
                <div className='sidebar-returns-shipping'></div>
                <div className='sidebar-returns-info'></div>
                <div className='sidebar-returns-track'></div>
                <div className='sidebar-returns-cancel'></div>
                <div className='sidebar-returns-history'></div>
            </div>
            </div>
            
            
            <div className='split-right'>
                <h2>About Us</h2>
                <p>Welcome to your number one source for all your reading needs. We are dedicated to providing you with a diverse selection of books across various genres and interests, ensuring that every reader finds something they love.</p>
                <p>For any questions or inquiries, please don't hesitate to contact our customer service team aprovided below. We look forward to answering your questions and helping you find your perfect reading experience.</p>
                <p>�� 2024 #1BookStore.<br/> All rights reserved.</p>
               
                <div className='row4'>
                    <h2>Help Center</h2>
                    <p>Our website is available for access 24/7 from anywhere across the world</p>
                    <p>Reach out to our customer service lines through the any of the means provided</p>
                    <p>Management, #1BookStore</p>
                    </div>
                    <div className='row5'>
                        <h2>Contact Us</h2>
                        <p>+2345678910</p>
                        <p>+2345678910</p>
                    </div>
                    <div className='row7'>
                        <h2>Stay Connected With Us</h2>
                        <ul>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='#'>Twitter</a></li>
                            <li><a href='#'>Instagram</a></li>
                            <li><a href='#'>LinkedIn</a></li>
                            <li><a href='#'>Email</a></li>
                            <li><a href='#'>Phone (UK)</a></li>
                        </ul>
                          <br/>
                            <p> 2023 Bookstore. All rights reserved.</p>
                            <p style={{textAlign: 'center'}}>Privacy Policy | Terms & Conditions</p>
                    </div>
                </div>
            <div/>
        <div/>
        </div>

    );
};

export default Dashboard;