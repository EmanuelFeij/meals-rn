import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type MealDetailsScreenProps =  {
    navigation: NativeStackNavigationProp<any>;
  };
const MealDetailsScreen = (props: MealDetailsScreenProps) => {

    const {navigation} = props;

    const handleOnPressCategories = () => {
        navigation.popToTop()
    }

  return (
    <View style={styles.screen}>
      <Text>MealDetailsScreen</Text>
      <Button title="Go to Categories" onPress={handleOnPressCategories}/>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
