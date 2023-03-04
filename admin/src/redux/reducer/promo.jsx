import {
  REGISTER_PROMO_REQUEST,
  REGISTER_PROMO_SUCCESS,
  REGISTER_PROMO_FAIL,
  REGISTER_PROMO_RESET,
  CLEAR_ERRORS,
  GET_PROMOS_REQUEST,
  GET_PROMOS_SUCCESS,
  GET_PROMOS_FAIL,
  DELETE_PROMO_SUCCESS,
  DELETE_PROMO_FAIL,
  DELETE_PROMO_RESET,
  UPDATE_PROMO_REQUEST,
  UPDATE_PROMO_SUCCESS,
  UPDATE_PROMO_FAIL,
  UPDATE_PROMO_RESET,
} from "../type/promo";

export const promos = (
  state = {
    promos: [],
  },
  action
) => {
  switch (action.type) {
    case GET_PROMOS_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_PROMO_REQUEST:
    case UPDATE_PROMO_REQUEST:
      return {
        ...state,
        promoLoading: true,
      };
    case REGISTER_PROMO_SUCCESS:
      return {
        ...state,
        promoLoading: false,
        success: action.payload.success,
        promos: [...state.promos, action.payload.data],
      };
    case UPDATE_PROMO_SUCCESS:
      return {
        ...state,
        promoLoading: false,
        success: action.payload.success,
        promos: state.promos.map((content) =>
          content._id === action.payload.data._id
            ? (content = action.payload.data)
            : content
        ),
      };
    case GET_PROMOS_SUCCESS:
      return {
        ...state,
        loading: false,
        promos: action.payload.data,
      };
    case DELETE_PROMO_SUCCESS:
      return {
        ...state,
        promoDeleted: true,
        promos: state.promos.filter(({ _id }) => _id !== action.payload._id),
      };
    case REGISTER_PROMO_FAIL:
    case UPDATE_PROMO_FAIL:
      return {
        ...state,
        promoLoading: false,
        success: false,
        promoError: action.payload,
      };
    case DELETE_PROMO_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PROMOS_FAIL:
      return {
        promos: [],
        loading: false,
        error: action.payload,
      };
    case REGISTER_PROMO_RESET:
    case DELETE_PROMO_RESET:
    case UPDATE_PROMO_RESET:
      return {
        ...state,
        success: false,
        promoDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        promoError: null,
      };

    default:
      return state;
  }
};
