import { SIGN_UP } from './types';
import client from './client';

/**
 *
 * @param userData
 * @returns dispatch
 */
export const SignUpAction = (userData: any) => async (dispatch: any) => {
    try {

        const res = await client.post(`/customers`, { ...userData });
        return dispatch(SignUp(res.data))
    } catch (error) {
        console.log("error ", error.response)
        return error
    }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SignUp = (payload: any) => {
    return {
        type: SIGN_UP,
        payload,
    };
};
