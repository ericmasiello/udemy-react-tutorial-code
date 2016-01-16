import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBookReducer from './reducer-active-book';

/*
 * The object returned from here represents our GLOBAL
 * application state - the whoooole thing.
 */
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;