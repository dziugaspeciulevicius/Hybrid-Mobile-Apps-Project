import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { listUsers, deleteUser } from "../actions/userActions.js";

const Users = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // user delete part of the state
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete; // from state we get success and rename it to successDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
      console.log(users);
      console.log("showing user list");
    } else {
      dispatch(listUsers());
      console.log(users);
      console.log("push to login page");
    }
  }, [dispatch, successDelete, userInfo]);

  return (
    <View style={styles.container}>
      <Text>Users screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default Users;
