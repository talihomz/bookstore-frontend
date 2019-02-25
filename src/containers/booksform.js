import React, { Component } from 'react';

import BOOK_CATEGORIES from './caterories';

class BooksForm extends Component {
    render(){

        const categoryOptions = BOOK_CATEGORIES.map( category => {
            return <option value={ category }>{ category }</option>;
        });

        return <form>
            <label>Title</label>
            <input type="text" placeholder="Title" /> <br />
            <label>Category</label>
            <select>
                {categoryOptions}
            </select>
            <br />
            <button type="submit">Save</button>
        </form>
    }
    
};

export default BooksForm;