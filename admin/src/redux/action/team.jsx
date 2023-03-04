import {
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  ADD_TEAM_FAIL,
  CLEAR_ERRORS,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAIL,
  DELETE_TEAM_FAIL,
  DELETE_TEAM_SUCCESS,
  UPDATE_TEAM_REQUEST,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
} from "../type/team";
import axios from "axios";

// Register User
export const registerTeam = (teamData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TEAM_REQUEST });

    let { data } = await axios.post(`/api/team`, teamData);

    dispatch({
      type: ADD_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TEAM_FAIL,
      payload: error.response.data.message,
    });
  }
};

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

// Delete Users
export const deleteTeam = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/team/${id}`);

    dispatch({
      type: DELETE_TEAM_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TEAM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update User
export const updateTeam = (updatedData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TEAM_REQUEST });

    const { data } = await axios.patch(`/api/team/${id}`, updatedData);

    dispatch({
      type: UPDATE_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TEAM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
