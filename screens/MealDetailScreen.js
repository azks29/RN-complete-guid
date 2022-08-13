import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
