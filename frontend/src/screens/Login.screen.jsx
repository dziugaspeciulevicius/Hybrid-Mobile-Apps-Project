import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import Text from "../components/Text";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      navigation.navigate("Main", { screen: "Orders" });
    } else {
      console.log("user is not an admin")
    }
  }, [userInfo, navigation]);

  const submitHandler = (e) => {
    dispatch(login(email, password));
    console.log("login");
  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Welcome back
        </Text>
      </Main>

      {error && (
          <Text center color="red">{error}</Text>
      )}
      <Auth>
        <AuthContainer>
          <AuthTitle>Email Address</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            autoFocus={true}
            keyboardType="email-address"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </AuthContainer>
        <AuthContainer>
          <AuthTitle>Password</AuthTitle>
          <AuthField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            autoFocus={true}
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </AuthContainer>
      </Auth>

      <SignInContainer onPress={submitHandler}>
        <Text bold center color="#fff">
          Sign In
        </Text>
      </SignInContainer>

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default LoginScreen;

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 192px;
`;

const Auth = styled.View`
  margin: 40px 32px 20px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 30px;
`;

const SignInContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  right: -100px;
  top: -200px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 300px;
  left: -50px;
  top: -50px;
`;

const StatusBar = styled.StatusBar``;
