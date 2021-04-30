import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const ManageProductsScreen = props => {
  return (
    <View>
      <Text>This is the Manage Products Screen</Text>
    </View>
  );
};

ManageProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: "My Products",
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>,
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Product"
          iconName="add-circle-outline"
          onPress={() => {
            navData.navigation.navigate({
              routeName: "EditProduct"
            });
          }}
        />
      </HeaderButtons>
  };
}

const styles = StyleSheet.create({

});

export default ManageProductsScreen;