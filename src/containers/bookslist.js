import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook } from '../actions';

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeBook: (book) => {
            dispatch(removeBook(book))
        }
    }
}; 

class BooksListComponent extends Component {

    render() {
        const books = this.props.books;

        return <table>
            <thead>
                <tr>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                { books.map( book => <Book key={ book.id } book={ book } /> ) }
            </tbody>    
        </table>
    }
}

const BooksList = connect(mapStateToProps, mapDispatchToProps)(BooksListComponent);

export default BooksList;