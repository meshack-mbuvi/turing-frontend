import { SIGN_UP,LOGIN } from './types';
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

/**
 *
 * @param userData
 * @returns dispatch
 */
export const LoginAction = (userData: any) => async (dispatch: any) => {
    try {

        const res = await client.post(`/customers/login`, { ...userData });
        localStorage.setItem('accessToken',res.data.accessToken)
        return dispatch(Login(res.data.customer))
    } catch (error) {
        return error
    }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const Login = (payload: any) => {
    return {
        type: LOGIN,
        payload,
    };
};

