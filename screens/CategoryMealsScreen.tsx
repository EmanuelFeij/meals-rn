import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Category from "../models/category";

type CategoryMealsScreenProps = {
  navigation: NavigationProp<any>;
};

const CategoryMealsScreen = (props: CategoryMealsScreenProps) => {
  const { navigation } = props;
  const handleOnPress = () => {
    navigation.navigate("MealDetails");
  };
  const handleOnPressBack = () => {
      navigation.goBack()
  }
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Button title="Go to meal details" onPress={handleOnPress} />
      <Button title="Go Back" onPress={handleOnPressBack} />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
