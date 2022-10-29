import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducer/productReducer';

const reducer = combineReducers({
    products:productsReducer,
    productDetails:productDetailsReducer
})

let inicialState = {}

const middleware = [thunk]
const store = createStore(reducer, inicialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store