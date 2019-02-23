import React from 'react';

const Book = (props) => {
    const book = props.book;
    return <tr>
        <td>{ book.id }</td>
        <td>{ book.title }</td>
        <td>{ book.category }</td>
    </tr>;
}

export default Book;