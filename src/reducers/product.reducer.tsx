import { initialState } from "./initialState";
import { SET_PRODUCTS } from '../actions/types';

export const products = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};
