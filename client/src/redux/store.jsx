import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import { team } from "./reducer/team";
import { testimonial } from "./reducer/testimonial";
import { property } from "./reducer/property";
import { pictureUrl } from "./reducer/pictureUrl";

const reducer = combineReducers({
  team,
  testimonial,
  property,
  pictureUrl,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
