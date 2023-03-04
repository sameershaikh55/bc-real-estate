import {
  CLEAR_ERRORS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_RESET,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
} from "../type/contact";

export const contact = (
  state = {
    contacts: [],
  },
  action
) => {
  switch (action.type) {
    case GET_CONTACT_REQUEST:
      return {
        loading: true,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload.data,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contactDeleted: true,
        contacts: state.contacts.filter(
          ({ _id }) => _id !== action.payload._id
        ),
      };
    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CONTACT_FAIL:
      return {
        team: [],
        loading: false,
        error: action.payload,
      };
    case DELETE_CONTACT_RESET:
      return {
        ...state,
        success: false,
        contactDeleted: false,
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
