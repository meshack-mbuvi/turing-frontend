import { initialState } from "./initialState";
import { CATEGORIES } from '../actions/types';
export const categories = (state = initialState, action: any) => {
    switch (action.type) {
        case CATEGORIES:
            return {
                ...state, categories: action.payload
            }

        default:
            return state;
    }
};
