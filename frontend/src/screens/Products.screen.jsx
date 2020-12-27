import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Products screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default Products;
