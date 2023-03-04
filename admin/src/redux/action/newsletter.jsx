import {
  CLEAR_ERRORS,
  DELETE_NEWSLETTER_FAIL,
  DELETE_NEWSLETTER_SUCCESS,
  GET_NEWSLETTER_FAIL,
  GET_NEWSLETTER_REQUEST,
  GET_NEWSLETTER_SUCCESS,
} from "../type/newsletter";
import axios from "axios";

// Get contacts
export const getNewsletters = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NEWSLETTER_REQUEST });

    const { data } = await axios.get(`/api/newsletter`);

    dispatch({
      type: GET_NEWSLETTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_NEWSLETTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Users
export const deleteNewsletter = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/newsletter/${id}`);

    dispatch({
      type: DELETE_NEWSLETTER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_NEWSLETTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
