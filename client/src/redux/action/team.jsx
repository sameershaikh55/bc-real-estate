import {
  CLEAR_ERRORS,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAIL,
} from "../type/team";
import axios from "axios";

// Get Users
export const getTeam = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEAM_REQUEST });

    const { data } = await axios.get(`/api/team`);

    dispatch({
      type: GET_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEAM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
