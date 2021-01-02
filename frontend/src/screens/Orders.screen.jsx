import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { listOrders } from "../actions/orderActions";
import styled from 'styled-components';
import Text from "../components/Text";

const OrdersScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  
  return (
    <Container>
      <Main>
        <Text title semi center>
          Orders
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
