import {
  ADD_TESTIMONIAL_REQUEST,
  ADD_TESTIMONIAL_SUCCESS,
  ADD_TESTIMONIAL_FAIL,
  ADD_TESTIMONIAL_RESET,
  CLEAR_ERRORS,
  GET_TESTIMONIAL_REQUEST,
  GET_TESTIMONIAL_SUCCESS,
  GET_TESTIMONIAL_FAIL,
  DELETE_TESTIMONIAL_SUCCESS,
  DELETE_TESTIMONIAL_FAIL,
  DELETE_TESTIMONIAL_RESET,
  UPDATE_TESTIMONIAL_REQUEST,
  UPDATE_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_FAIL,
  UPDATE_TESTIMONIAL_RESET,
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
    case ADD_TESTIMONIAL_REQUEST:
    case UPDATE_TESTIMONIAL_REQUEST:
      return {
        ...state,
        testimonialLoading: true,
      };
    case ADD_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        testimonialLoading: false,
        success: action.payload.success,
        testimonial: [action.payload.data, ...state.testimonial],
      };
    case UPDATE_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        testimonialLoading: false,
        success: action.payload.success,
        testimonial: state.testimonial.map((content) =>
          content._id === action.payload.data._id
            ? (content = action.payload.data)
            : content
        ),
      };
    case GET_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        testimonial: action.payload.data,
      };
    case DELETE_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        testimonialDeleted: true,
        testimonial: state.testimonial.filter(
          ({ _id }) => _id !== action.payload._id
        ),
      };
    case ADD_TESTIMONIAL_FAIL:
    case UPDATE_TESTIMONIAL_FAIL:
      return {
        ...state,
        testimonialLoading: false,
        success: false,
        testimonialError: action.payload,
      };
    case DELETE_TESTIMONIAL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_TESTIMONIAL_FAIL:
      return {
        testimonial: [],
        loading: false,
        error: action.payload,
      };
    case ADD_TESTIMONIAL_RESET:
    case DELETE_TESTIMONIAL_RESET:
    case UPDATE_TESTIMONIAL_RESET:
      return {
        ...state,
        success: false,
        testimonialDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        testimonialError: null,
      };

    default:
      return state;
  }
};
