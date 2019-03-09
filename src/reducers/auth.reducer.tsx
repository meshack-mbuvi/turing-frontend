import { initialState } from "./initialState";
import { SIGN_UP } from '../actions/types';

export const customer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state, customer:action.payload
            };

        default:
            return state;
    }
};
