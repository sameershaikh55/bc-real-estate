import {
  CLEAR_ERRORS,
  GET_TESTIMONIAL_REQUEST,
  GET_TESTIMONIAL_SUCCESS,
  GET_TESTIMONIAL_FAIL,
} from "../type/testimonial";

export const testimonial = (
  state = {
    testimonial: [],
  },
  action
) => {
  switch (action.type) {
    case GET_TESTIMONIAL_REQUEST:
      return {
        loading: true,
      };
    case GET_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        testimonial: action.payload.data,
      };
    case GET_TESTIMONIAL_FAIL:
      return {
        testimonial: [],
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
