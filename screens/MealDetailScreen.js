import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setParams({ title: selectedMeal.title });
    navigation.setOptions({
      headerRight: () => (
        <TouchableNativeFeedback>
          <Ionicons name="ios-star" size={24} color="white" />
        </TouchableNativeFeedback>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
