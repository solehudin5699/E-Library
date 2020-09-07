import {combineReducers} from 'redux';
import animateReducer from './animate';
import authAPIReducer from "./auth";
import historyAPIReducer from "./history";
import borrowBooksAPIReducer from "./borrowBooks"
import bookReducer from './book';

const indexReducer = combineReducers({
    animate : animateReducer,
    authAPI:authAPIReducer,
    historyAPI: historyAPIReducer,
    borrowBooksAPI:borrowBooksAPIReducer,
    book : bookReducer,
})

export default indexReducer;