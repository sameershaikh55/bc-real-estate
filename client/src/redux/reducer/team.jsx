import {
  CLEAR_ERRORS,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAIL,
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
    case GET_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        team: action.payload.data,
      };
    case GET_TEAM_FAIL:
      return {
        team: [],
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
