import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers.js";
import {
  orderDetailsReducer,
  orderDeliverReducer,
  orderListReducer,
} from "./reducers/orderReducers.js";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver: orderDeliverReducer,
  orderList: orderListReducer,
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
