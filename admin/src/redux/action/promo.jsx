import {
  REGISTER_PROMO_REQUEST,
  REGISTER_PROMO_SUCCESS,
  REGISTER_PROMO_FAIL,
  CLEAR_ERRORS,
  GET_PROMOS_REQUEST,
  GET_PROMOS_SUCCESS,
  GET_PROMOS_FAIL,
  DELETE_PROMO_SUCCESS,
  DELETE_PROMO_FAIL,
  UPDATE_PROMO_REQUEST,
  UPDATE_PROMO_SUCCESS,
  UPDATE_PROMO_FAIL,
} from "../type/promo";
import axios from "axios";

// Register User
export const registerPromo = (promoData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PROMO_REQUEST });

    let { data } = await axios.post(`/api/promocode`, promoData);

    dispatch({
      type: REGISTER_PROMO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_PROMO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Users
export const getPromos = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROMOS_REQUEST });

    const { data } = await axios.get(`/api/promocode`);

    dispatch({
      type: GET_PROMOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROMOS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Users
export const deletePromo = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/promocode/${id}`);

    dispatch({
      type: DELETE_PROMO_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROMO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update User
export const updatePromo = (updatedData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROMO_REQUEST });

    const { data } = await axios.patch(`/api/promocode/${id}`, updatedData);

    dispatch({
      type: UPDATE_PROMO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROMO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
