import { initialState } from "./initialState";
import { SET_SHOPPING_CART_ID } from '../actions/types';

export const products = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SHOPPING_CART_ID:
            return {
                ...state,
                shoppingCart: action.payload
            };

        default:
            return state;
    }
};
