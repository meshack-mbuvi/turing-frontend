// Action types
import { SET_PRODUCTS, SET_PRODUCT_ATTRIBUTES } from '../actions/types';

import client from './client';

/**
 * @param url
 * @returns dispatch(...) : a call to action creator
 */
export const AllProducts = (url?: any) => async (dispatch: any) => {
 try {
  let res: any = null;

  if (url) {
   res = await client.get(url);
  } else {
   res = await client.get(`/products`);
  }

  return dispatch(SetProducts(res.data));
 } catch (error) {
  return error;
 }
};

export const getProduct = (id: any) => async (dispatch: any) => {
 try {
  const { data } = await client.get(`/products/${id}`);
  await GetProductAttributes();
  return dispatch(SetProducts(data));
 } catch (error) {
  return error;
 }
};

/**
 * @param id
 * @returns dispatch(...) : a call to action creator
 */
export const GetProductAttributes = () => async (dispatch: any) => {
 try {
  const res = await client.get(`/attributes/values/1`);
  return dispatch(SetProductAttribute(res.data));
 } catch (error) {
  return error;
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
  payload
 };
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SetProductAttribute = (payload: any) => {
 return {
  type: SET_PRODUCT_ATTRIBUTES,
  payload
 };
};
