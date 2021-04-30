import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator} from "react-navigation-drawer";

import CartScreen from "../screens/CartScreen";
import EditProductScreen from "../screens/EditProductScreen";
import ManageProductsScreen from "../screens/ManageProductsScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ShopScreen from "../screens/ShopScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle: {
    fontFamily: "zendots"
  },
  headerBackTitleStyle: {
    fontFamily: "nunito"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const ShopNavigator = createStackNavigator({
  Shop: ShopScreen,
  ProductDetail: ProductDetailScreen,
  Cart: CartScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const ManageProductsNavigator = createStackNavigator({
  ManageProducts: ManageProductsScreen,
  EditProduct: EditProductScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
  ShopNav: {
    screen: ShopNavigator,
    navigationOptions: {
      drawerLabel: "Shop"
    }
  },
  OrdersNav: {
    screen: OrdersNavigator,
    navigationOptions: {
      drawerLabel: "My Orders"
    }
  },
  ManageProductsNav: {
    screen: ManageProductsNavigator,
    navigationOptions: {
      drawerLabel: "My Products"
    }
  }
}, {
  contentOptions: {
    activeTintColor: Colors.activeColor,
    labelStyle: {
      fontFamily: "nunito"
    }
  }
});

export default createAppContainer(MainNavigator);