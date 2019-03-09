import client from './client';

// Action types
import { SET_PRODUCTS } from '../actions/types';

/**
 * @param none
 * @returns dispatch(...) : a call to action creator
 */
export const AllProducts = () => async (dispatch: any) => {
    try {
        const res = await client.get(`/products`);
        return dispatch(SetProducts(res.data));
    } catch (error) {
        return error
    }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SetProducts = (payload: any) => {
    return {
        type: SET_PRODUCTS,
        payload,
    };
};
