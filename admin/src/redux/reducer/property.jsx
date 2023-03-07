import {
  ADD_PROPERTY_REQUEST,
  ADD_PROPERTY_SUCCESS,
  ADD_PROPERTY_FAIL,
  ADD_PROPERTY_RESET,
  CLEAR_ERRORS,
  GET_PROPERTY_REQUEST,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAIL,
  DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_FAIL,
  DELETE_PROPERTY_RESET,
  UPDATE_PROPERTY_REQUEST,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_FAIL,
  UPDATE_PROPERTY_RESET,
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
    case ADD_PROPERTY_REQUEST:
    case UPDATE_PROPERTY_REQUEST:
      return {
        ...state,
        propertyLoading: true,
      };
    case ADD_PROPERTY_SUCCESS:
      return {
        ...state,
        propertyLoading: false,
        success: action.payload.success,
        properties: [action.payload.data, ...state.properties],
        totalProperties: ++state.totalProperties,
      };
    case UPDATE_PROPERTY_SUCCESS:
      return {
        ...state,
        propertyLoading: false,
        success: action.payload.success,
        properties: state.properties.map((content) =>
          content._id === action.payload.data._id
            ? (content = action.payload.data)
            : content
        ),
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
    case DELETE_PROPERTY_SUCCESS:
      return {
        ...state,
        propertyDeleted: true,
        properties: state.properties.filter(
          ({ _id }) => _id !== action.payload._id
        ),
        totalProperties: --state.totalProperties,
      };
    case ADD_PROPERTY_FAIL:
    case UPDATE_PROPERTY_FAIL:
      return {
        ...state,
        propertyLoading: false,
        success: false,
        propertyError: action.payload,
      };
    case DELETE_PROPERTY_FAIL:
      return {
        ...state,
        error: action.payload,
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
    case ADD_PROPERTY_RESET:
    case DELETE_PROPERTY_RESET:
    case UPDATE_PROPERTY_RESET:
      return {
        ...state,
        success: false,
        propertyDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        propertyError: null,
      };

    default:
      return state;
  }
};
