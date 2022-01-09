import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type FavoritesScreenProps =  {
    navigation: NativeStackNavigationProp<any>;
  };
const FavoritesScreen = (props: FavoritesScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
