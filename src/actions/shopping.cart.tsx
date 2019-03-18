import client from './client';

// Action types
import {
 SET_SHOPPING_CART_ID,
 ADD_TO_SHOPPING_CART,
 GET_ALL_ITEMS_IN_CART,
 REMOVE_ITEM_FROM_CART
} from './types';

/**
 * @param none
 * @returns dispatch(...) : a call to action creator
 */
export const GetShoppingCartId = () => async (dispatch: any) => {
 try {
  const res = await client.get(`/shoppingcart/generateUniqueId`);
  localStorage.setItem('cart_id', res.data.cart_id);
  return dispatch(SetShoppingCartId(res.data));
 } catch (error) {
  return error;
 }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const SetShoppingCartId = (payload: any) => {
 return {
  type: SET_SHOPPING_CART_ID,
  payload
 };
};

/**
 * @param data: contains cart_id,product_id and product attributes
 * @returns dispatch(...) : a call to action creator
 */
export const AddToShopping = (data: any) => async (dispatch: any) => {
 try {
  console.log('dat ', data);
  const res = await client.post(`/shoppingcart/add`, data);

  dispatch(AddItemToShoppingCart(res.data));
  return dispatch(GetItemsInShoppingCart(data.cart_id));
 } catch (error) {
  return error;
 }
};

/**
 * @param data: contains cart_id,product_id and product attributes
 * @returns dispatch(...) : a call to action creator
 */
export const RemoveItemFromShopping = (itemId: any) => async (
 dispatch: any
) => {
 try {
  await client.delete(`/shoppingcart/removeProduct/${itemId}`);
  const cartId = localStorage.getItem('cart_id');
  return dispatch(GetItemsInShoppingCart(cartId));
 } catch (error) {
  return error;
 }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const AddItemToShoppingCart = (payload: any) => {
 return {
  type: ADD_TO_SHOPPING_CART,
  payload
 };
};

/**
 * @param cartId
 * @returns All items in cart with given id
 */
export const GetItemsInShoppingCart = (cartId: any) => async (
 dispatch: any
) => {
 try {
  const res = await client.get(`/shoppingcart/${cartId}`);
  return dispatch(getItemsInShoppingCart(res.data));
 } catch (error) {
  return error;
 }
};

/**
 *
 * @param payload
 * @returns action object
 */
export const getItemsInShoppingCart = (payload: any) => {
 return {
  type: GET_ALL_ITEMS_IN_CART,
  payload
 };
};

/**
 *
 * @param payload
 * @returns action object
 */
export const removeItemFromShoppingCart = (payload: any) => {
 return {
  type: REMOVE_ITEM_FROM_CART,
  payload
 };
};
