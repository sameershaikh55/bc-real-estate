import { PICTURE_URL } from "../type/pictureUrl";

export const pictureUrl = (
  state = {
    properties_url: "",
    team_url: "",
  },
  action
) => {
  switch (action.type) {
    case PICTURE_URL:
      return {
        properties_url: action.payload.data + "properties/",
        team_url: action.payload.data + "team/",
      };
    default:
      return state;
  }
};
