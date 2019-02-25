import { CREATE_BOOK, REMOVE_BOOK } from "../actions/constants";

const booksReducer = (state = [], action) => {
    switch(action.type) {
        case CREATE_BOOK:
        return [ ...state, action.book ];
        case REMOVE_BOOK:
        return [ 
            ...state.slice(0, action.book_id),
            ...state.slice(action.book_id + 1)
        ];
        default:
        return state;
    }
}

export default booksReducer;