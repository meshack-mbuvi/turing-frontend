import client from "./client";

// Action types
import { CATEGORIES } from "../actions/types";

/**
 * @param none
 * @returns dispatch(...) : a call to action creator
 */
export const GetCategories = () => async (dispatch: any) => {
    try {
        const res = await client.get(`/categories`);

        return dispatch(SetCategories(res.data));
    } catch (error) {
        return error;
    }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SetCategories = (payload: any) => {
    return {
        type: CATEGORIES,
        payload
    };
};
