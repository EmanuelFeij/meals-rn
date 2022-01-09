import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

/*ListRenderItem<Category>*/
const renderGridItem: ListRenderItem<Category> = ({ item }) => {
  return (
    <TouchableOpacity onPress={ ()=> {}} style={{ ...styles.gridItem, backgroundColor: item.color }}>
      <View >
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CategoriesScreen = (props: CategoriesScreenProps) => {
  const nav = props.navigation;

  const handleOnPress = () => {
    nav.navigate("CategoryMeals");
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
