import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) > 0
  );

  const renderMealItems = (itemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList data={displayedMeals} renderItem={renderMealItems} />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
