import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";
import styled from 'styled-components';
import Text from "../components/Text";
import { listOrders } from "../actions/orderActions";

const OrdersScreen = ({navigation}) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
      console.log(orders);
    } else {
      navigation.navigate("Auth", { screen: "Login" });
      console.log("push to login page");
    }
  }, [dispatch, userInfo, navigation])

  const viewDetailsHandler = (e) => {
    e.preventDefault();
    console.log("view order details");
  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Orders
        </Text>
      </Main>

      {loading ? (
        <Text center>Data is loading...</Text>
      ) : error ? (
        <Text center color="red">
          {error}
        </Text>
      ) : (
        <View>
          {orders.map((order) => (
            <OrderCard key={order._id}>
              <Text heavy>
                ID:
                <Text semi> {order._id}</Text>
              </Text>
              <Text heavy>
                User:
                <Text semi> {order.user && order.user.name}</Text>
              </Text>
              <Text heavy>
                Date:
                <Text semi> {order.createdAt.substring(0, 10)}</Text>
              </Text>
              <Text heavy>
                Total:
                <Text semi> ${order.totalPrice}</Text>
              </Text>
              <Text heavy>
                Is paid?:
                {order.isPaid ? (
                  <Text semi> {order.paidAt.substring(0, 10)}</Text>
                ) : (
                  <Text heavy color="#FF0000"> Not paid</Text>
                )}
              </Text>
              <Text heavy>
                Is delivered?:
                {order.isDelivered ? (
                  <Text semi> {order.deliveredAt.substring(0, 10)}</Text>
                ) : (
                  <Text heavy color="#FF0000"> Not delivered</Text>
                )}
              </Text>

                <DetailsContainer onPress={viewDetailsHandler}>
                  <Text semi center color="#fff">
                    Details
                  </Text>
                </DetailsContainer>
                
            </OrderCard>
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

export default OrdersScreen;


const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 60px;
  padding-bottom: 10px;
`;

const OrderCard = styled.View`
  border: 2px solid #8022d9;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 5px 16px;
  padding: 10px;
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

const DetailsContainer = styled.TouchableOpacity`
  margin: 0 10px;
  height: 30px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;


const StatusBar = styled.StatusBar``;
