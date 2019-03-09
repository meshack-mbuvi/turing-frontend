import client from './client';

// Action types
import { SET_SHOPPING_CART_ID } from '../actions/types';

/**
 * @param none
 * @returns dispatch(...) : a call to action creator
 */
export const GetShoppingCartId = () => async (dispatch: any) => {
    try {
        const res = await client.get(`/shoppingcart/generateUniqueId`);
        localStorage.setItem('cart_id', res.data.cart_id);
        return dispatch(SetShoppingCartId(res.data));
    } catch (error) {
        return error
    }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SetShoppingCartId = (payload: any) => {
    return {
        type: SET_SHOPPING_CART_ID,
        payload,
    };
};
