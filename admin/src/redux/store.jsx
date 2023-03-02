import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// REDUCERS
import { resetPasswordReducer, userReducer } from "./reducer/auth";
import { users } from "./reducer/users";
import { team } from "./reducer/team";
import { pictureUrl } from "./reducer/pictureUrl";

const reducer = combineReducers({
  user: userReducer,
  resetPassword: resetPasswordReducer,
  users,
  team,
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
