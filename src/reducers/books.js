import { CREATE_BOOK, REMOVE_BOOK } from "../actions/constants";

const booksReducer = (state = [], action) => {
    
    switch(action.type) {
        case CREATE_BOOK:
        return [ ...state, action.book ];
        case REMOVE_BOOK:
        const bookIndex = state.findIndex( book => book.id === action.bookId );
        return [ 
            ...state.slice(0, bookIndex),
            ...state.slice(bookIndex + 1)
        ];
        default:
        return state;
    }
}

export default booksReducer;