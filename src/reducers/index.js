import { combineReducers } from "redux";

// reducers
import booksReducer from "./books";

const reducers = combineReducers({
    books: booksReducer
});

export default reducers;