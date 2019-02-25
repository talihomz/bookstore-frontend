import { combineReducers } from "redux";

// reducers
import booksReducer from "./books";
import categoryFilterReducer from "./categoryFilter";

const reducers = combineReducers({
    books: booksReducer,
    filter: categoryFilterReducer
});

export default reducers;