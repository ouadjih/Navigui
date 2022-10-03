import { createStore ,applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk';
import { ProductDetailsReducer, productListReducer } from "./reducers/productReducers";

const initialState = {};

const reducer= combineReducers({
productList:productListReducer,
productDetails: ProductDetailsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
     composeEnhancers( applyMiddleware(thunk)
));

export default store;