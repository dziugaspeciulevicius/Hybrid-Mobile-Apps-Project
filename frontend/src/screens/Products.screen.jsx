import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../components/Text";
import { Alert, TouchableOpacity, ScrollView } from "react-native";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingProductDelete,
    error: errorProductDelete,
    success: successProductDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingProductCreate,
    error: errorProductCreate,
    success: successProductCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigation.navigate("Auth", { screen: "Login" });
      console.log("push to login page");
    }

    if (successProductCreate) {
      navigation.navigate("EditProduct");
      console.log(
        "successProductCreate push to /admin/product/${createdProduct._id}/edit"
      );
    } else {
      dispatch(listProducts());
      console.log("list products");
    }
  }, [
    dispatch,
    userInfo,
    successProductDelete,
    successProductCreate,
    createdProduct,
    navigation,
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
    console.log("create product");
  };

  const deleteProductHandler = (id) => {
    Alert.alert(
      "Delete product?",
      "Are you sure you want to delete this product?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(deleteProduct(id)) },
      ],
      { cancelable: false }
    );
  };

  const editProductHandler = (product) => {
    console.log("edit product");
    console.log("view order details");
    navigation.navigate("EditProduct", {
      ...product,
    });
  };

  return (
    <Container>
      <Main>
        <Text title semi center>
          Products
        </Text>
      </Main>

      {loading ? (
        <Text center>Data is loading...</Text>
      ) : error ? (
        <Text center color="red">
          {error}
        </Text>
      ) : (
        <ScrollView>
          {products.map((product) => (
            <ProductCard key={product._id}>
              <Text heavy>
                ID:
                <Text semi>{product._id}</Text>
              </Text>
              <Text heavy>
                Product name:
                <Text semi> {product.name}</Text>
              </Text>
              <Text heavy>
                Price:
                <Text semi> ${product.price}</Text>
              </Text>
              <Text heavy>
                Category:
                <Text semi> {product.category}</Text>
              </Text>
              <Text heavy>
                Gender:
                <Text semi> {product.gender}</Text>
              </Text>
              <Text heavy>
                Brand:
                <Text semi> {product.brand}</Text>
              </Text>

              <ButtonsContainer>
                <UpdateContainer onPress={() => editProductHandler(product)}>
                  <Text semi center color="#fff">
                    Edit information
                  </Text>
                </UpdateContainer>

                <DeleteContainer
                  onPress={() => deleteProductHandler(product._id)}
                >
                  <Text semi center color="#fff">
                    Delete product
                  </Text>
                </DeleteContainer>
              </ButtonsContainer>
            </ProductCard>
          ))}
        </ScrollView>
      )}

      <AddProductButton>
        <TouchableOpacity onPress={createProductHandler}>
          <Text style={{ fontSize: 60, color: "white", paddingBottom: 5 }}>
            +
          </Text>
        </TouchableOpacity>
      </AddProductButton>

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
  padding-bottom: 10px;
`;

const ProductCard = styled.View`
  border: 2px solid #8022d9;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 5px 16px;
  padding: 10px;
  z-index: -100;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -90px;
  z-index: -100;
`;

const AddProductButton = styled.View`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: #8022d9;
  border-radius: 100px;
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

const UpdateContainer = styled.TouchableOpacity`
  margin: 0 10px;
  width: 45%;
  margin-top: 10px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #8022d9;
  border-radius: 6px;
`;

const DeleteContainer = styled.TouchableOpacity`
  margin: 0 10px;
  width: 45%;
  margin-top: 10px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
  border-radius: 6px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
`;

const StatusBar = styled.StatusBar``;
