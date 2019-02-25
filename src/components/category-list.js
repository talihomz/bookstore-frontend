import React from 'react';
import BOOK_CATEGORIES from '../containers/categories';

const categoryOptions = BOOK_CATEGORIES.map( category => {
    return <option key={ Math.random() } value={ category }>{ category }</option>;
});

const CategoryList = (props) => {
    const { onChange, category, hasAll } = props;
    return <select name="category" onChange={ onChange } value={ category }>
        { hasAll && <option value="All">All</option> }
        { categoryOptions }
    </select>
}

export default CategoryList;