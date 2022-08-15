import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FaveritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/colors";
import { CATEGORIES } from "../data/dummy-data";
import { TouchableNativeFeedback } from "react-native";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const Stack = createNativeStackNavigator();

const MealsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={35}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitle: "Meals Categories",
        }}
        name="Categories"
        component={CategoriesScreen}
      />

      <Stack.Screen
        options={({ route }) => {
          const { categoryId } = route.params;
          const selectedCategory = CATEGORIES.find(
            (cat) => cat.id === categoryId
          );
          return {
            headerTitle: selectedCategory.title,
            headerTitleAlign: "center",
          };
        }}
        name="CategoryMeals"
        component={CategoryMealsScreen}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: route.params.title,
        })}
        name="MealDetail"
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  );
};

const FavStack = createNativeStackNavigator();

const FavNavigator = () => {
  return (
    <FavStack.Navigator screenOptions={defaultStackNavOptions}>
      <FavStack.Screen name="Faverites" component={FaveritesScreen} />
    </FavStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
          if (route.name === "Meals") {
            IconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
          } else if (route.name === "Faverite") {
            IconName = focused ? "ios-star" : "ios-star-outline";
          }

          return <Ionicons name={IconName} size={size} color={color} />;
        },

        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: Colors.primaryColor,
        tabBarInactiveBackgroundColor: "grey",
        headerShown: false,
        tabBarInactiveTintColor: Colors.accentColor,
        tabBarActiveTintColor: "white",
      })}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Faverite" component={FavNavigator} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let IconName;
          if (route.name === "MealsFav") {
            IconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
          } else if (route.name === "Filters") {
            IconName = focused ? "ios-star" : "ios-star-outline";
          }

          return <Ionicons name={IconName} size={size} color={color} />;
        },
        drawerActiveTintColor: Colors.accentColor,
        drawerLabelStyle: {
          fontFamily: "openSansBold",
        },
      })}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "Meals",
          headerShown: false,
        }}
        name="MealsFav"
        component={MealsFavTabNavigator}
      />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
