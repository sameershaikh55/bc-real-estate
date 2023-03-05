import {
  ADD_PROPERTY_REQUEST,
  ADD_PROPERTY_SUCCESS,
  ADD_PROPERTY_FAIL,
  CLEAR_ERRORS,
  GET_PROPERTY_REQUEST,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAIL,
  DELETE_PROPERTY_FAIL,
  DELETE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_REQUEST,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_FAIL,
  GET_SINGLE_PROPERTY_FAIL,
  GET_SINGLE_PROPERTY_REQUEST,
  GET_SINGLE_PROPERTY_SUCCESS,
} from "../type/property";
import axios from "axios";

// Register property
export const registerProperty = (propertyData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PROPERTY_REQUEST });

    let { data } = await axios.post(`/api/property`, propertyData);

    dispatch({
      type: ADD_PROPERTY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

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

// Get search propertys
export const getSearchedProperties = (search, page) => async (dispatch) => {
  try {
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

// Delete propertys
export const deleteProperty = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/property/${id}`);

    dispatch({
      type: DELETE_PROPERTY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update property
export const updateProperty = (updatedData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROPERTY_REQUEST });

    const { data } = await axios.put(`/api/property/${id}`, updatedData);

    dispatch({
      type: UPDATE_PROPERTY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROPERTY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
