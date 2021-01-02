import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers, deleteUser } from "../actions/userActions.js";
import styled from 'styled-components';
import Text from "../components/Text";

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
      console.log("showing user list");
    } else {
      dispatch(listUsers());
      console.log(users);
      console.log("push to login page");
    }
  }, [dispatch, successDelete, userInfo]);

  return (
    <Container>
      <Main>
        <Text title semi center>
          Users
        </Text>
      </Main>

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