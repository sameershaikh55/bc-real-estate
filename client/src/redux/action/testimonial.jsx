import {
  CLEAR_ERRORS,
  GET_TESTIMONIAL_REQUEST,
  GET_TESTIMONIAL_SUCCESS,
  GET_TESTIMONIAL_FAIL,
} from "../type/testimonial";
import axios from "axios";

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

// Clearing testimonial
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
