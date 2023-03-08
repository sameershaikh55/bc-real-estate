import { PICTURE_URL } from "../type/pictureUrl";

export const pictureUrl = (
  state = {
    properties_url: "",
    team_url: "",
    video_short_url: "",
    testimonial_url: "",
  },
  action
) => {
  switch (action.type) {
    case PICTURE_URL:
      return {
        properties_url: action.payload.data + "images/properties/",
        team_url: action.payload.data + "images/team/",
        testimonial_url: action.payload.data + "images/testimonials/",
        video_short_url: action.payload.data + "videos/shortClips/",
      };
    default:
      return state;
  }
};
