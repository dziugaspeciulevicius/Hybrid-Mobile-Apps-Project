import React, { useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../components/Text";
import {
  getOrderDetails,
  deliverOrder,
} from "../actions/orderActions";
import { ORDER_DELIVER_RESET } from "../constants/orderConstants";

const OrderDetails = ({ route, navigation }) => {
  const {
    _id,
    shippingAddress,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
    paymentMethod,
    orderItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = route.params;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigation.navigate("Auth", { screen: "Login" });
      console.log("push to login page");
    }

    if (!order || successDeliver || (order && order._id !== _id)) {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(_id));
    }
  }, [dispatch, successDeliver, deliveredAt, isDelivered, order, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(deliverOrder(order));
    Alert.alert(
      "Order delivered",
      "Order has been marked as delivered",
      [{ text: "OK" }],
      { cancelable: false }
    );
  };

  return (
    <Container>
      <Main>
        <Text large semi center>
          Order {_id}
        </Text>
      </Main>

      <ScrollView>
        <OrderCard>
          <CardHeader>
            <Text large heavy center>
              Shipping
            </Text>
          </CardHeader>

          <Text heavy>
            Name:
            <Text semi> {shippingAddress.firstName}</Text>
          </Text>
          <Text heavy>
            Surname:
            <Text semi> {shippingAddress.lastName}</Text>
          </Text>
          <Text heavy>
            Phone:
            <Text semi> {shippingAddress.phone}</Text>
          </Text>
          <Text heavy>
            Email:
            <Text semi> {shippingAddress.email}</Text>
          </Text>
          <Text heavy>
            Shipping address:
            <Text semi>
              {" "}
              {shippingAddress.country}, {shippingAddress.city},{" "}
              {shippingAddress.address}, {shippingAddress.postalCode}{" "}
            </Text>
          </Text>
          <Text heavy>
            Delivered:
            {isDelivered ? (
              <Text semi color="#32CD32">
                {" "}
                {deliveredAt}
              </Text>
            ) : (
              <Text heavy color="#FF0000">
                {" "}
                Not delivered
              </Text>
            )}
          </Text>
        </OrderCard>

        <OrderCard>
          <CardHeader>
            <Text large heavy center>
              Payment method
            </Text>
          </CardHeader>
          <Text heavy>
            Method:
            <Text semi> {paymentMethod}</Text>
          </Text>
          <Text heavy>
            Paid:
            {isPaid ? (
              <Text semi color="#32CD32">
                {" "}
                {paidAt}
              </Text>
            ) : (
              <Text heavy color="#FF0000">
                {" "}
                Not paid
              </Text>
            )}
          </Text>
        </OrderCard>

        <OrderCard>
          <CardHeader>
            <Text large heavy center>
              Order items
            </Text>
          </CardHeader>
          {orderItems.map((item, index) => (
            <Item key={index}>
              <Text heavy>
                Item name:
                <Text semi> {item.name}</Text>
              </Text>
              <Text heavy>
                Quantity & price:
                <Text semi>
                  {" "}
                  {item.qty} x ${item.price} = ${item.qty * item.price}
                </Text>
              </Text>
            </Item>
          ))}
        </OrderCard>

        <OrderCard>
          <CardHeader>
            <Text large heavy center>
              Order summary
            </Text>
          </CardHeader>
          <Text heavy>
            Items:
            <Text semi> ${itemsPrice}</Text>
          </Text>
          <Text heavy>
            Shipping:
            <Text semi> ${shippingPrice}</Text>
          </Text>
          <Text heavy>
            Tax:
            <Text semi> ${taxPrice}</Text>
          </Text>
          <Text heavy>
            Total:
            <Text heavy> ${totalPrice}</Text>
          </Text>
        </OrderCard>

        {userInfo && userInfo.isAdmin && isPaid && !isDelivered && (
          <UpdateContainer onPress={submitHandler}>
            <Text bold center color="#fff">
              Mark as delivered
            </Text>
          </UpdateContainer>
        )}
      </ScrollView>

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default OrderDetails;

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 60px;
  padding-bottom: 10px;
`;

const CardHeader = styled.View`
  padding-bottom: 10px;
`;

const OrderCard = styled.View`
  border: 2px solid #8022d9;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 5px 16px;
  padding: 10px;
`;

const Item = styled.View`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding-bottom: 5px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -90px;
  z-index: -100;
`;

const UpdateContainer = styled.TouchableOpacity`
  margin: 10px 16px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
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
