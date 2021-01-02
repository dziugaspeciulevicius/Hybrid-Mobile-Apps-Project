import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../components/Text";
import {
  getUserDetails,
  updateUserProfile,
  logout,
  register
} from "../actions/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  



//   const userRegister = useSelector(state => state.userRegister)
//   const { userInfo } = userRegister  // from user reducer
  
  
//   useEffect(() => {
//     if(userInfo) {
//       // history.push(redirect)
//       console.log("registered user is in state")
//     }
//   }, [dispatch, userInfo, navigation])

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("click")
//     if(password !== confirmPassword) {
//         console.log("Passwords don't match")
//     } else {
//         dispatch(register(name, email, password))
//         console.log("dispatch register hit")
//     }
// };
  
  
  
  // const orderListMy = useSelector((state) => state.orderListMy);
  // const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigation.navigate("Auth", { screen: "Login" });
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   console.log("Passwords don't match");
    // } else {
    //   dispatch(updateUserProfile({ id: user._id, name, email, password }));
    // }
    console.log("update profile");
  };

  const logoutHandler = () => {
    console.log("logout");
    dispatch(logout());
    navigation.navigate("Auth", { screen: "Main" });
    if (userInfo) {
      console.log("user info is still in state")
    } else {
      console.log("user info is no longer logged in")
    }
    // navigation.navigate("Auth");

  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Profile
        </Text>
      </Main>

      <Form>
        <FormContainer>
          <FormTitle>Name</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            autoFocus={true}
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Email Address</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            autoFocus={true}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Password</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            autoFocus={true}
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Confirm Password</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            autoFocus={true}
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
          />
        </FormContainer>
      </Form>

      <UpdateContainer onPress={submitHandler}>
        <Text bold center color="#fff">
          Update information
        </Text>
      </UpdateContainer>

      <SignOutContainer onPress={logoutHandler}>
        <Text bold center color="#fff">
          Sign Out
        </Text>
      </SignOutContainer>

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default ProfileScreen;

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 60px;
`;

const Form = styled.View`
  margin: 40px 32px 20px;
`;

const FormContainer = styled.View`
  margin-bottom: 32px;
`;

const FormTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const FormField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 30px;
`;

const UpdateContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;

const SignOutContainer = styled.TouchableOpacity`
  margin: 0 32px;
  margin-top: 30px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
  border-radius: 6px;
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
  right: -200px;
  top: -200px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 300px;
  left: -50px;
  top: -30px;
`;

const StatusBar = styled.StatusBar``;
