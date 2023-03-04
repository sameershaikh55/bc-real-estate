import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import { resetPasswordReducer, userReducer } from "./reducer/auth";
import { users } from "./reducer/users";
import { team } from "./reducer/team";
import { newsletter } from "./reducer/newsletter";
import { promos } from "./reducer/promo";
import { contact } from "./reducer/contact";
import { pictureUrl } from "./reducer/pictureUrl";

const reducer = combineReducers({
  user: userReducer,
  resetPassword: resetPasswordReducer,
  users,
  team,
  contact,
  promos,
  newsletter,
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
