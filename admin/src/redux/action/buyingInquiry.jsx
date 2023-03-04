import {
  CLEAR_ERRORS,
  DELETE_BUYING_INQUIRY_FAIL,
  DELETE_BUYING_INQUIRY_SUCCESS,
  GET_BUYING_INQUIRY_FAIL,
  GET_BUYING_INQUIRY_REQUEST,
  GET_BUYING_INQUIRY_SUCCESS,
} from "../type/buyingInquiry";
import axios from "axios";

// Get contacts
export const getBuyingInquiry = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BUYING_INQUIRY_REQUEST });

    const { data } = await axios.get(`/api/inquiry/buy`);

    dispatch({
      type: GET_BUYING_INQUIRY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BUYING_INQUIRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Users
export const deleteBuyingInquiry = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/inquiry/buy/${id}`);

    dispatch({
      type: DELETE_BUYING_INQUIRY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BUYING_INQUIRY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
