import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import Text from "../components/Text";
import { Checkbox } from "react-native-paper";

const EditUserScreen = ({ route, navigation }) => {
  const { _id, name, email, isAdmin } = route.params;
    const [userName, setName] = useState(name);
    const [userEmail, setEmail] = useState(email);
    const [isUserAdmin, setIsAdmin] = useState(isAdmin);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails; // from user reducer

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    // check for success update then we want to reset userUpdate state and redirect to user list
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigation.navigate("Main", { screen: "Users" });
    } 
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("update profile");
    dispatch(updateUser({ _id: _id, userName, userEmail, isUserAdmin }));
  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Edit user
        </Text>
      </Main>

      <Form>
        <FormContainer>
          <FormTitle>Name</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            value={userName}
            onChangeText={(userName) => setName(userName)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Email Address</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            value={userEmail}
            onChangeText={(userEmail) => setEmail(userEmail)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Is admin</FormTitle>
          <Checkbox
            status={isUserAdmin ? "checked" : "unchecked"}
            onPress={() => setIsAdmin(!isUserAdmin)}
          />
        </FormContainer>
      </Form>

      <UpdateContainer onPress={submitHandler}>
        <Text bold center color="#fff">
          Update information
        </Text>
      </UpdateContainer>

      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

export default EditUserScreen;

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 150px;
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
