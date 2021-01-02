import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from '@react-native-async-storage/async-storage';

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


const userInfoFromStorage = AsyncStorage.getItem('userInfo')
// userInfoFromStorage != null ? JSON.parse(userInfoFromStorage) : null

// const userInfoFromStorage = AsyncStorage.getItem("userInfo")
  // ? JSON.parse(userInfoFromStorage)
  // : null

  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
