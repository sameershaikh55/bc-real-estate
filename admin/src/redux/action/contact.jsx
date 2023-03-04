import {
  CLEAR_ERRORS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
} from "../type/contact";
import axios from "axios";

// Get contacts
export const getContacts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CONTACT_REQUEST });

    const { data } = await axios.get(`/api/contact`);

    dispatch({
      type: GET_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CONTACT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Users
export const deleteContacts = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/contact/${id}`);

    dispatch({
      type: DELETE_CONTACT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
