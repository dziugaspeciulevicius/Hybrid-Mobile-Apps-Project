import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../components/Text";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

const EditProductScreen = ({ route, navigation }) => {
  const {
    _id,
    name,
    price,
    image,
    brand,
    countInStock,
    category,
    gender,
    description,
  } = route.params;

  const [productName, setName] = useState("");
  const [productPrice, setPrice] = useState(0);
  const [productImage, setImage] = useState("");
  const [productBrand, setBrand] = useState("");
  const [productCountInStock, setCountInStock] = useState(0);
  const [productCategory, setCategory] = useState("");
  const [productGender, setGender] = useState("");
  const [productDescription, setDescription] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigation.navigate("Main", { screen: "Products" });
    } else {
      // first we check if there's already a product, and check if productId matches
      if (!name || _id !== _id) {
        // if it doesn't exist or match url we want to fetch info
        dispatch(listProductDetails(_id));
      } else {
        // set info
        setName(name);
        setPrice(price);
        setImage(image);
        setBrand(brand);
        setCategory(category);
        setGender(gender);
        setCountInStock(countInStock);
        setDescription(description);
      }
    }
  }, [dispatch, product, _id, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: _id,
        name,
        price,
        image,
        brand,
        gender,
        category,
        description,
        countInStock,
      })
    );
    console.log("Update product")
  };
  return (
    <Container>
      <Main>
        <Text title semi center>
          Product edit
        </Text>
      </Main>
      <Form>
        <FormContainer>
          <FormTitle>Product name</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            value={productName}
            onChangeText={(productName) => setName(productName)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Price</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            value={productPrice}
            onChangeText={(productPrice) => setPrice(productPrice)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Product brand</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            value={productBrand}
            onChangeText={(productBrand) => setBrand(productBrand)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Category</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            value={productCategory}
            onChangeText={(productCategory) => setCategory(productCategory)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Gender</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            value={productGender}
            onChangeText={(productGender) => setGender(productGender)}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>Description</FormTitle>
          <FormField
            autoCapitalize="none"
            autoCompleteType="name"
            autoCorrect={false}
            value={productDescription}
            onChangeText={(productDescription) => setDescription(productDescription)}
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

export default EditProductScreen;

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
  margin-top: 60px;
  padding-bottom: 10px;
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
  height: 20px;
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
