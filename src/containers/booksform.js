import React, { Component } from 'react';

import { createBook } from '../actions';
import { connect } from 'react-redux';
import CategoryList from '../components/category-list';

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
        category: ""
    }
}

class BooksFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = resetComponentState();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
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

    handleCategoryChange(value) {
        this.setState({ category: value })
    } 
    
    render(){

        const { title, category } = this.state; 
        
        return <div className="row book-form">
            <div className="col-12">
                <h3>Add new book</h3>
            </div>
            <div className="col-12">
                <form onSubmit={ this.handleSubmit } className="d-flex">
                    <input className="form-control mr-2" type="text" placeholder="Title" name="title" onChange={ this.handleChange } value={ title } />
                    <CategoryList valueChanged={ this.handleCategoryChange } category={ category } placeholder="Category" />
                    <button type="submit" className="btn btn-custom mr-2 ml-2 pl-2 pr-2">Add Book</button>
                </form>

                <br />
            </div>
        </div>

        // return 
        //     <label>Title</label>
        //     
        //     <label>Category</label>
        //     
        //     <br />
        //     
        // </form>
    }
    
};

const BooksForm = connect(null, mapDispatchToProps)(BooksFormComponent);

export default BooksForm;