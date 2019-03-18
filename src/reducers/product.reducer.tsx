import { initialState } from './initialState';
import { SET_PRODUCTS, SET_PRODUCT_ATTRIBUTES } from '../actions/types';

export const products = (state = initialState, action: any) => {
 switch (action.type) {
  case SET_PRODUCTS:
   return { ...state, products: action.payload };
  default:
   return state;
 }
};

export const productAttributes = (state = initialState, action: any) => {
 switch (action.type) {
  case SET_PRODUCT_ATTRIBUTES:
   return {
    ...state,
    productAttributes: action.payload
   };

  default:
   return state;
 }
};
