import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';

/*
 * The object returned from here represents our GLOBAL
 * application state - the whoooole thing.
 */
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;