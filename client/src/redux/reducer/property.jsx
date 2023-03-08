import {
  CLEAR_ERRORS,
  GET_PROPERTY_REQUEST,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAIL,
  GET_SINGLE_PROPERTY_FAIL,
  GET_SINGLE_PROPERTY_REQUEST,
  GET_SINGLE_PROPERTY_SUCCESS,
} from "../type/property";

export const property = (
  state = {
    property: {},
    properties: [],
    totalProperties: "",
    currentPagetotalProperties: "",
    propertiesPerPage: "",
    totalPages: "",
    currentPage: "",
  },
  action
) => {
  switch (action.type) {
    case GET_PROPERTY_REQUEST:
    case GET_SINGLE_PROPERTY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.payload.data.properties,
        totalProperties: action.payload.data.totalProperties,
        currentPagetotalProperties:
          action.payload.data.currentPagetotalProperties,
        propertiesPerPage: action.payload.data.propertiesPerPage,
        totalPages: action.payload.data.totalPages,
        currentPage: action.payload.data.currentPage,
        totalResults: action.payload.data.totalResults,
      };
    case GET_SINGLE_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        property: action.payload.data,
      };
    case GET_PROPERTY_FAIL:
      return {
        properties: [],
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_PROPERTY_FAIL:
      return {
        property: {},
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
