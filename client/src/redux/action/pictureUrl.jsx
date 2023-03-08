import axios from "axios";
import { PICTURE_URL } from "../type/pictureUrl";

// Load User
export const loadUrls = () => async (dispatch) => {
  try {
    const pictureUrlData = await axios.get(`/api/picture-url`);

    dispatch({ type: PICTURE_URL, payload: pictureUrlData.data });
  } catch (error) {
    console.log(error);
  }
};
