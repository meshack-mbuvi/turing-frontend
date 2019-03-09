import { combineReducers } from "redux";
import { products } from './product.reducer'
import {customer} from './auth.reducer'

export const rootReducer = combineReducers({
    products,
    customer
});
