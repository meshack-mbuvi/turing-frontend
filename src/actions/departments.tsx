import client from "./client";

// Action types
import { DEPARTMENTS } from "../actions/types";

/**
 * @param url
 * @returns dispatch(...) : a call to action creator
 */
export const GetDepartments = () => async (dispatch: any) => {
    try {
        const res = await client.get(`/departments`);

        return dispatch(SetDepartments(res.data));
    } catch (error) {
        return error;
    }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SetDepartments = (payload: any) => {
    return {
        type: DEPARTMENTS,
        payload
    };
};
