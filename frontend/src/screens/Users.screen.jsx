import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import Text from "../components/Text";
import { listUsers, deleteUser } from "../actions/userActions.js";

const UsersScreen = () => {
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
    } else {
      navigation.navigate("Auth", { screen: "Login" });
      console.log("push to login page");
    }
  }, [dispatch, successDelete, userInfo]);

  const deleteUserHandler = (id) => {
    Alert.alert(
      "Delete user?",
      "Are you sure you want to delete this user?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(deleteUser(id)) },
      ],
      { cancelable: false }
    );
  };

  //   alertItemName = (user) => {
  //     alert(user.name)
  //  }

  return (
    <Container>
      <Main>
        <Text title semi center>
          Users
        </Text>
      </Main>

      {loading ? (
        <Text center>Data is loading...</Text>
      ) : error ? (
        <Text center color="red">
          {error}
        </Text>
      ) : (
        // <Text center> Hello it should render users</Text>
        // <TouchableOpacity></TouchableOpacity>
        // <FlatList
        //   data={users}
        //   renderItem={user}
        //   onRefresh={() => onRefresh()}
        // />
        <View>
          {users.map((user) => (
            <TouchableOpacity key={user._id}>
              <UserCard>
                <Text>{user.name}</Text>
              </UserCard>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default UsersScreen;

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 60px;
  padding-bottom: 10px;
`;

const UserCard = styled.View`
  border: 2px solid #8022d9;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 5px 16px;
  /* height: 48px; */
  /* align-items: center; */
  /* justify-content: center; */
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -90px;
  z-index: -100;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  right: 250px;
  top: 0px;
  z-index: -1;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 500px;
  height: 300px;
  border-radius: 300px;
  left: 100px;
  top: -140px;
`;

const StatusBar = styled.StatusBar``;
