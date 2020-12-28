import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers.js";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;
