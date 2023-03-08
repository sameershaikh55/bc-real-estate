import {
  REGISTER_SHORT_VIDEO_REQUEST,
  REGISTER_SHORT_VIDEO_SUCCESS,
  REGISTER_SHORT_VIDEO_FAIL,
  CLEAR_ERRORS,
  GET_SHORT_VIDEOS_REQUEST,
  GET_SHORT_VIDEOS_SUCCESS,
  GET_SHORT_VIDEOS_FAIL,
  DELETE_SHORT_VIDEO_SUCCESS,
  DELETE_SHORT_VIDEO_FAIL,
  UPDATE_SHORT_VIDEO_REQUEST,
  UPDATE_SHORT_VIDEO_SUCCESS,
  UPDATE_SHORT_VIDEO_FAIL,
} from "../type/shortClips";
import axios from "axios";

// Register Clip
export const registerShortVideo = (videoData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_SHORT_VIDEO_REQUEST });

    let { data } = await axios.post(`/api/clip`, videoData);

    dispatch({
      type: REGISTER_SHORT_VIDEO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_SHORT_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Clip
export const getShortVideos = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SHORT_VIDEOS_REQUEST });

    const { data } = await axios.get(`/api/clip`);

    dispatch({
      type: GET_SHORT_VIDEOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SHORT_VIDEOS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Clip
export const deleteShortVideo = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/clip/${id}`);

    dispatch({
      type: DELETE_SHORT_VIDEO_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SHORT_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Clip
export const updateShortVideo = (updatedData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SHORT_VIDEO_REQUEST });

    const { data } = await axios.patch(`/api/clip/${id}`, updatedData);

    dispatch({
      type: UPDATE_SHORT_VIDEO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SHORT_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Clip
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
