import {
  CLEAR_ERRORS,
  DELETE_NEWSLETTER_FAIL,
  DELETE_NEWSLETTER_RESET,
  DELETE_NEWSLETTER_SUCCESS,
  GET_NEWSLETTER_FAIL,
  GET_NEWSLETTER_REQUEST,
  GET_NEWSLETTER_SUCCESS,
} from "../type/newsletter";

export const newsletter = (
  state = {
    newsletters: [],
  },
  action
) => {
  switch (action.type) {
    case GET_NEWSLETTER_REQUEST:
      return {
        loading: true,
      };
    case GET_NEWSLETTER_SUCCESS:
      return {
        ...state,
        loading: false,
        newsletters: action.payload.data,
      };
    case DELETE_NEWSLETTER_SUCCESS:
      return {
        ...state,
        newsletterDeleted: true,
        newsletters: state.newsletters.filter(
          ({ _id }) => _id !== action.payload._id
        ),
      };
    case DELETE_NEWSLETTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_NEWSLETTER_FAIL:
      return {
        team: [],
        loading: false,
        error: action.payload,
      };
    case DELETE_NEWSLETTER_RESET:
      return {
        ...state,
        success: false,
        newsletterDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        teamError: null,
      };

    default:
      return state;
  }
};
