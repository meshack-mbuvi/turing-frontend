import { initialState } from "./initialState";
import { SET_SHOPPING_CART_ID, GET_ALL_ITEMS_IN_CART } from '../actions/types';

export const shoppingCart = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SHOPPING_CART_ID:
            return {
                ...state,
                shoppingCart: action.payload
            };

        case GET_ALL_ITEMS_IN_CART:
            return {
                ...state,
                shoppingCart: action.payload
            };

        default:
            return state;
    }
};
