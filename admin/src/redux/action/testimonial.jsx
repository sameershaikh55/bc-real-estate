import {
  ADD_TESTIMONIAL_REQUEST,
  ADD_TESTIMONIAL_SUCCESS,
  ADD_TESTIMONIAL_FAIL,
  CLEAR_ERRORS,
  GET_TESTIMONIAL_REQUEST,
  GET_TESTIMONIAL_SUCCESS,
  GET_TESTIMONIAL_FAIL,
  DELETE_TESTIMONIAL_FAIL,
  DELETE_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_REQUEST,
  UPDATE_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_FAIL,
} from "../type/testimonial";
import axios from "axios";

// Register testimonial
export const registerTestimonial = (newData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TESTIMONIAL_REQUEST });

    let { data } = await axios.post(`/api/testimonial`, newData);

    dispatch({
      type: ADD_TESTIMONIAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TESTIMONIAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get testimonial
export const getTestimonial = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TESTIMONIAL_REQUEST });

    const { data } = await axios.get(`/api/testimonial`);

    dispatch({
      type: GET_TESTIMONIAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TESTIMONIAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete testimonial
export const deleteTestimonial = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/testimonial/${id}`);

    dispatch({
      type: DELETE_TESTIMONIAL_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TESTIMONIAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update testimonial
export const updateTestimonial = (updatedData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TESTIMONIAL_REQUEST });

    const { data } = await axios.patch(`/api/testimonial/${id}`, updatedData);

    dispatch({
      type: UPDATE_TESTIMONIAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TESTIMONIAL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing testimonial
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
