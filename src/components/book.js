import React from 'react';

const Book = (props) => {
    const book = props.book;
    
    return <div className="card p-4 mt-3">
        <div className="row">
            <div className="col-6">
                <span className="category">{ book.category }</span>
                <h4 className="title">{ book.title }</h4>
                <p className="author">Suzanne Collins</p>
                <br />
                <ul className="d-flex ml-0 pl-0">
                    <li className="book-action"><a href="#">Comments</a></li>
                    <li className="book-action"><a href="#" onClick={ props.onRemove }>Remove</a></li>
                    <li className="book-action"><a href="#">Edit</a></li>
                </ul>               
            </div>
            <div className="col-3">
                <p className="progress">64%</p>
                <span className="progress-footer">Complete</span>
            </div>
            <div className="col-3">
                <h6>Current Chapter</h6>
                <span className="chapter d-block">Chapter 7</span>
                <button className="btn btn-primary mt-4">Update Progress</button>
            </div>
        </div>
    </div>
}

export default Book;