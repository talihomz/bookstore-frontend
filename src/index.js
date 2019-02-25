import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducers from './reducers/index';

const generateId = _ => {
    return parseInt(Math.random() * 10000);
}

const INITIAL_STORE = {
    books: [
        { id: generateId(), title: "Shaw Shank Redemption", category: "Action" },
        { id: generateId(), title: "Pulp Fiction", category: "Action" },
        { id: generateId(), title: "Star Wars", category: "Sci-Fi" },
        { id: generateId(), title: "Saw", category: "Horror" },
        { id: generateId(), title: "The Social Network", category: "Biography" },
        { id: generateId(), title: "Mad Men", category: "Biography" },
        { id: generateId(), title: "Spy Kids", category: "Kids" }
    ]
};

const store = createStore(reducers, INITIAL_STORE);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));