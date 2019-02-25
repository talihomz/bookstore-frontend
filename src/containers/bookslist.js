import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

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
                { books.map( book => <Book book={ book } /> ) }
            </tbody>    
        </table>
    }
}

const BooksList = connect(mapStateToProps, mapDispatchToProps)(BooksListComponent);

export default BooksList;