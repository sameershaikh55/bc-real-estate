import {
  REGISTER_SHORT_VIDEO_REQUEST,
  REGISTER_SHORT_VIDEO_SUCCESS,
  REGISTER_SHORT_VIDEO_FAIL,
  REGISTER_SHORT_VIDEO_RESET,
  CLEAR_ERRORS,
  GET_SHORT_VIDEOS_REQUEST,
  GET_SHORT_VIDEOS_SUCCESS,
  GET_SHORT_VIDEOS_FAIL,
  DELETE_SHORT_VIDEO_SUCCESS,
  DELETE_SHORT_VIDEO_FAIL,
  DELETE_SHORT_VIDEO_RESET,
  UPDATE_SHORT_VIDEO_REQUEST,
  UPDATE_SHORT_VIDEO_SUCCESS,
  UPDATE_SHORT_VIDEO_FAIL,
  UPDATE_SHORT_VIDEO_RESET,
} from "../type/shortClips";

export const shortVideos = (
  state = {
    shortVideos: [],
  },
  action
) => {
  switch (action.type) {
    case GET_SHORT_VIDEOS_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_SHORT_VIDEO_REQUEST:
    case UPDATE_SHORT_VIDEO_REQUEST:
      return {
        ...state,
        videoLoading: true,
      };
    case REGISTER_SHORT_VIDEO_SUCCESS:
      return {
        ...state,
        videoLoading: false,
        success: action.payload.success,
        shortVideos: [action.payload.data, ...state.shortVideos],
      };
    case UPDATE_SHORT_VIDEO_SUCCESS:
      return {
        ...state,
        videoLoading: false,
        success: action.payload.success,
        shortVideos: state.shortVideos.map((content) =>
          content._id === action.payload.data._id
            ? (content = action.payload.data)
            : content
        ),
      };
    case GET_SHORT_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        shortVideos: action.payload.data,
      };
    case DELETE_SHORT_VIDEO_SUCCESS:
      return {
        ...state,
        videoDeleted: true,
        shortVideos: state.shortVideos.filter(
          ({ _id }) => _id !== action.payload._id
        ),
      };
    case REGISTER_SHORT_VIDEO_FAIL:
    case UPDATE_SHORT_VIDEO_FAIL:
      return {
        ...state,
        videoLoading: false,
        success: false,
        videoError: action.payload,
      };
    case DELETE_SHORT_VIDEO_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_SHORT_VIDEOS_FAIL:
      return {
        shortVideos: [],
        loading: false,
        error: action.payload,
      };
    case REGISTER_SHORT_VIDEO_RESET:
    case DELETE_SHORT_VIDEO_RESET:
    case UPDATE_SHORT_VIDEO_RESET:
      return {
        ...state,
        success: false,
        videoDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        videoError: null,
      };

    default:
      return state;
  }
};
