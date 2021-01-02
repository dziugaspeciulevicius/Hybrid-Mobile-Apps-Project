import React from "react";
import styled from 'styled-components';
import Text from "../components/Text";

const ProductsScreen = () => {
  return (
    <Container>
      <Main>
        <Text title semi center>
          Products
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

export default ProductsScreen;

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