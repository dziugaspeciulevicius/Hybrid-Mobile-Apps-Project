import React from "react";
import styled from "styled-components";
import Text from "../components/Text";
import {
  Alert,
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications



const ProductsScreen = () => {
  return (
    <Container>
      <Main>
        <Text title semi center>
          Products
        </Text>
      </Main>

      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <ActionButton
          buttonColor="rgba(128,34,217,1)"
          onPress={() => {
            console.log("add product");
          }}
        />
      </View>
      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 60px;
  padding-bottom: 10px;
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
  right: 150px;
  top: -240px;
  z-index: -1;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 300px;
  left: 250px;
  top: -20px;
`;

const StatusBar = styled.StatusBar``;
