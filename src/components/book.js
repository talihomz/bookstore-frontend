import React from 'react';
import CircularProgressBar from './circular-progressbar';

const Book = (props) => {
    const book = props.book;

    return <div className="card p-4 mt-3">
        <div className="row d-flex ml-2 mr-5">
            <div className="mr-auto">
                <span className="category">{book.category}</span>
                <h4 className="title mb-0">{book.title}</h4>
                <p className="author">Suzanne Collins</p>
                <br />
                <ul className="d-flex ml-0 pl-0">
                    <li className="book-action"><a href="#">Comments</a></li>
                    <li className="book-action"><a href="#" onClick={props.onRemove}>Remove</a></li>
                    <li className="book-action last"><a href="#">Edit</a></li>
                </ul>
            </div>
            <div className="d-flex align-items-center mr-5">
                <CircularProgressBar value="60" />
                <div>
                    <span className="percentage d-block">60%</span>
                    <span className="completed d-block">Completed</span>
                </div>
            </div>
            <div className="current-chapter">
                <h6>Current Chapter</h6>
                <span className="d-block">Chapter 7</span>
                <button className="btn btn-primary mt-4">Update Progress</button>
            </div>
        </div>
    </div>
}

export default Book;