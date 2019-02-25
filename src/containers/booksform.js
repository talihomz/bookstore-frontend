import React, { Component } from 'react';

import BOOK_CATEGORIES from './categories';
import { createBook } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: (book) => {
            dispatch(createBook(book))
        }
    }
};

const resetComponentState = _ => {
    return {
        title: "",
        category: "Action"
    }
}

class BooksFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = resetComponentState();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, category } = this.state;

        this.props.createBook( { title, category } );
        this.setState(resetComponentState());
    }
    
    render(){

        const { title, category } = this.state;
        const categoryOptions = BOOK_CATEGORIES.map( category => {
            return <option key={ Math.random() } value={ category }>{ category }</option>;
        });

        return <form onSubmit={ this.handleSubmit }>
            <label>Title</label>
            <input type="text" placeholder="Title" name="title" onChange={ this.handleChange } value={ title } /> <br />
            <label>Category</label>
            <select name="category" onChange={ this.handleChange } value={ category }>
                {categoryOptions}
            </select>
            <br />
            <button type="submit">Save</button>
        </form>
    }
    
};

const BooksForm = connect(null, mapDispatchToProps)(BooksFormComponent);

export default BooksForm;