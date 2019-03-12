import { combineReducers } from "redux";
import { products, productAttributes } from './product.reducer';
import { customer } from './auth.reducer'
import { shoppingCart } from './shopping.cart';
import { categories } from './categories.reducer';
import { departments } from './departments.reducer'

export const rootReducer = combineReducers({
    products,
    customer,
    shoppingCart,
    productAttributes,
    categories,
    departments
});
