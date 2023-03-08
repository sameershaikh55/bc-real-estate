import {
  CLEAR_ERRORS,
  GET_PROPERTY_REQUEST,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAIL,
  GET_SINGLE_PROPERTY_FAIL,
  GET_SINGLE_PROPERTY_REQUEST,
  GET_SINGLE_PROPERTY_SUCCESS,
} from "../type/property";
import axios from "axios";

// GET SINGLE property
export const getSingleProperty = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PROPERTY_REQUEST });

    let { data } = await axios.get(`/api/property/${id}`);

    dispatch({
      type: GET_SINGLE_PROPERTY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get propertys
export const getProperties = (search, page) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROPERTY_REQUEST });

    const { data } = await axios.get(
      `/api/property${search || page ? "?" : ""}${
        (search && `search=${search}`) || ""
      }${(search && page && "&") || ""}${(page && `page=${page}`) || ""}`
    );

    dispatch({
      type: GET_PROPERTY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
