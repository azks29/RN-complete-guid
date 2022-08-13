import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MealsFavTabNavigator from "./MealsNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MealsFavTabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
