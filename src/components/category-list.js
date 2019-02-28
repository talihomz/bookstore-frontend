import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BOOK_CATEGORIES from '../containers/categories';


class CategoryList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.category
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        const { value } = e.target;
        this.setState({ value });
        this.props.valueChanged(value);
    }

    render() {
        const { hasAll, placeholder } = this.props;
        const { value } = this.state;
        const listLabel = value === undefined || value === "" ? placeholder : value;

        return <div className="dropdown show mr-2 ml-2">
            <button id="dropdownMenuLink" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                { listLabel }
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                { hasAll && <button className="dropdown-item" key={ Math.random() } onClick={ this.handleClick } value="All">All</button> }
                { BOOK_CATEGORIES.map(category => <button className="dropdown-item" key={Math.random()} onClick={ this.handleClick } value={category}>{ category }</button> ) }
            </div>
        </div>
    }
}

CategoryList.propTypes = {
    valueChanged: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
};

export default CategoryList;


