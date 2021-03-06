import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const OrdersScreen = props => {
  return (
    <View>
      <Text>This is the Orders Screen</Text>
    </View>
  );
};

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: "My Orders",
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
  };
}

const styles = StyleSheet.create({

});

export default OrdersScreen;