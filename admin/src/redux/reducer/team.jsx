import {
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  ADD_TEAM_FAIL,
  ADD_TEAM_RESET,
  CLEAR_ERRORS,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAIL,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_FAIL,
  DELETE_TEAM_RESET,
  UPDATE_TEAM_REQUEST,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
  UPDATE_TEAM_RESET,
} from "../type/team";

export const team = (
  state = {
    team: [],
  },
  action
) => {
  switch (action.type) {
    case GET_TEAM_REQUEST:
      return {
        loading: true,
      };
    case ADD_TEAM_REQUEST:
    case UPDATE_TEAM_REQUEST:
      return {
        ...state,
        teamLoading: true,
      };
    case ADD_TEAM_SUCCESS:
      return {
        ...state,
        teamLoading: false,
        success: action.payload.success,
        team: [action.payload.data, ...state.team],
      };
    case UPDATE_TEAM_SUCCESS:
      return {
        ...state,
        teamLoading: false,
        success: action.payload.success,
        team: state.team.map((content) =>
          content._id === action.payload.data._id
            ? (content = action.payload.data)
            : content
        ),
      };
    case GET_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        team: action.payload.data,
      };
    case DELETE_TEAM_SUCCESS:
      return {
        ...state,
        teamDeleted: true,
        team: state.team.filter(({ _id }) => _id !== action.payload._id),
      };
    case ADD_TEAM_FAIL:
    case UPDATE_TEAM_FAIL:
      return {
        ...state,
        teamLoading: false,
        success: false,
        teamError: action.payload,
      };
    case DELETE_TEAM_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_TEAM_FAIL:
      return {
        team: [],
        loading: false,
        error: action.payload,
      };
    case ADD_TEAM_RESET:
    case DELETE_TEAM_RESET:
    case UPDATE_TEAM_RESET:
      return {
        ...state,
        success: false,
        teamDeleted: false,
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
