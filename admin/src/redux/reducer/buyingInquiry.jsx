import {
  CLEAR_ERRORS,
  DELETE_BUYING_INQUIRY_FAIL,
  DELETE_BUYING_INQUIRY_RESET,
  DELETE_BUYING_INQUIRY_SUCCESS,
  GET_BUYING_INQUIRY_FAIL,
  GET_BUYING_INQUIRY_REQUEST,
  GET_BUYING_INQUIRY_SUCCESS,
} from "../type/buyingInquiry";

export const buyingInquiry = (
  state = {
    inquiries: [],
  },
  action
) => {
  switch (action.type) {
    case GET_BUYING_INQUIRY_REQUEST:
      return {
        loading: true,
      };
    case GET_BUYING_INQUIRY_SUCCESS:
      return {
        ...state,
        loading: false,
        inquiries: action.payload.data,
      };
    case DELETE_BUYING_INQUIRY_SUCCESS:
      return {
        ...state,
        inquiryDeleted: true,
        inquiries: state.inquiries.filter(
          ({ _id }) => _id !== action.payload._id
        ),
      };
    case DELETE_BUYING_INQUIRY_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_BUYING_INQUIRY_FAIL:
      return {
        inquiries: [],
        loading: false,
        error: action.payload,
      };
    case DELETE_BUYING_INQUIRY_RESET:
      return {
        ...state,
        success: false,
        inquiryDeleted: false,
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
