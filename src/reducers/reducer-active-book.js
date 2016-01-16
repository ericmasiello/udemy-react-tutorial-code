import { BOOK_SELECTED } from '../actions/types';

/*
 * state argument is only the portion of the application (redux) state that this
 * reducer is responsible for. In this case, state refers to the activeBook state.
 * It doesn't know anything about the books: [] portion of the appliction state
 */
export default function(state = null, action){
  switch(action.type){
    case BOOK_SELECTED:
      return action.payload;
    default:
      return state;
  }
}