import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const ShopScreen = props => {
  return (
    <View>
      <Text>This is the Shop Screen</Text>
    </View>
  );
};

ShopScreen.navigationOptions = navData => {
  return {
    headerTitle: "Shop",
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
          title="Cart"
          iconName="cart"
          onPress={() => {
            navData.navigation.navigate({
              routeName: "Cart"
            });
          }}
        />
      </HeaderButtons>
  };
}

const styles = StyleSheet.create({

});

export default ShopScreen;