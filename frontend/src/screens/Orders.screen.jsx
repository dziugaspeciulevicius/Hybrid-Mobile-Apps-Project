import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Text from "../components/Text";
import { listOrders } from "../actions/orderActions";

const OrdersScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // useEffect(() => {
  //   // if (userInfo && userInfo.isAdmin) {
  //     dispatch(listOrders())
  //   // } else {
  //     // navigation.navigate("Auth", { screen: "Login" });
  //   // }
  // }, [dispatch, navigation, userInfo, orderList, error])
  
  return (
    <Container>
      <Main>
        <Text title semi center>
          Orders
        </Text>
      </Main>

      {error && (
        <Text center color="red">{error}</Text>
    )}
      


      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>

  );
};

export default OrdersScreen;


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

const OrderCard = styled.View`
  width: 95%;
  border: 1px solid black;
  border-radius: 5px;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  right: -100px;
  top: -240px;
  z-index: -1;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 300px;
  left: -20px;
  top: -40px;
`;


const StatusBar = styled.StatusBar``;
