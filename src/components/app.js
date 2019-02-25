import BooksForm from "../containers/booksform";
import BooksList from "../containers/bookslist";
import React from 'react';

const App = (props) => {
    return <div>
        <BooksForm />
        <br />
        <BooksList />
    </div>
};

export default App;