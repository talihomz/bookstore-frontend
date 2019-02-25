import React, { Component } from 'react';
import { changeFilter } from '../actions';
import { connect } from 'react-redux';
import CategoryList from './category-list';

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (category) => {
            dispatch(changeFilter(category))
        }
    }
};

class CategoryFilterComponent extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { value } = e.target;
        
        this.props.changeFilter(value);
    }

    render() {
        const { filter } = this.props;

        return <div>
            <label>Filter: </label>
            <CategoryList onChange={ this.handleChange } category={ filter } hasAll/>
        </div>
    }
}

const CategoryFilter = connect(mapStateToProps, mapDispatchToProps)(CategoryFilterComponent);

export default CategoryFilter;