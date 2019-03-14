import { initialState } from "./initialState";
import { DEPARTMENTS } from '../actions/types';
export const departments = (state = initialState, action: any) => {
    switch (action.type) {
        case DEPARTMENTS :
            return {
                ...state, departments: action.payload
            }

        default:
            return state;
    }
};
