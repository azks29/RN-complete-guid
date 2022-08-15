import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import React from "react";

const MealItem = ({
  onSelectMeal,
  title,
  duration,
  complexity,
  affordability,
  image,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={onSelectMeal} useForeground>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <Text style={styles.title}>{title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{duration}m</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "90%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 15,
    marginHorizontal: "5%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  mealRow: {
    flexDirection: "row",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  title: {
    fontFamily: "openSansBold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});
