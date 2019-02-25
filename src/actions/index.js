import { CREATE_BOOK, REMOVE_BOOK } from "./constants";
import { generateId } from "../util";

export function createBook (book){
    book.id = generateId();
    return {
        type: CREATE_BOOK,
        book
    }
};

export function removeBook (book){
    return {
        type: REMOVE_BOOK,
        bookId: book.id
    }
};

