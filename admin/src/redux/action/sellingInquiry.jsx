import {
  CLEAR_ERRORS,
  DELETE_SELLING_INQUIRY_FAIL,
  DELETE_SELLING_INQUIRY_SUCCESS,
  GET_SELLING_INQUIRY_FAIL,
  GET_SELLING_INQUIRY_REQUEST,
  GET_SELLING_INQUIRY_SUCCESS,
} from "../type/sellingInquiry";
import axios from "axios";

// Get contacts
export const getSellingInquiry = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLING_INQUIRY_REQUEST });

    const { data } = await axios.get(`/api/inquiry/sell`);

    dispatch({
      type: GET_SELLING_INQUIRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SELLING_INQUIRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Users
export const deleteSellingInquiry = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/inquiry/sell/${id}`);

    dispatch({
      type: DELETE_SELLING_INQUIRY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SELLING_INQUIRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
