import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActveBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActveBookReducer
});

export default rootReducer;
