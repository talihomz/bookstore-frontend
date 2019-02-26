import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/category-filter';

const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        books: state.books,
        filter: state.filter
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

    handleRemoveBook(book) {
        
        // console.log(book);
        this.props.removeBook(book); 
    }

    render() {
        const { books, filter } = this.props;
        const booksToDisplay = filter === "All" ? books : books.filter( book => book.category === filter );

        return <div>
            <br />
            <CategoryFilter />
            <br />
            { booksToDisplay.map( book => <Book key={ book.id } book={ book } onRemove={ () => this.handleRemoveBook(book) } /> ) }
        </div>
    }
}

const BooksList = connect(mapStateToProps, mapDispatchToProps)(BooksListComponent);

export default BooksList;