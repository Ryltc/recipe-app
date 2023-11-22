import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated  } from "react-native";
import React, { useRef } from "react";
import Header from "../components/Header";
//import SearchFilter from "../components/SearchFilter";
//import CategoriesFilter from "../components/CategoriesFilter";
import SeasoningCard from "../components/SeasoningCard";
import RecipeCard from "../components/RecipeCard";
import SauceCard from "../components/SauceCard";

const RecipeListScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 170, 250],
    outputRange: [0, 0, 100],
    extrapolate: "clamp",
  });

  // Define a threshold where you want the categories and seasoning cards to disappear.
  const scrollThreshold = 100;

  return (
    <SafeAreaView style={{ backgroundColor: "#5e3c2c", flex: 1, paddingHorizontal: 20, marginTop: 50 }}>
      <Animated.View style={{ transform: [{ translateY: translateHeader }] }}>
        {/* render header */}
        <Header style={{ color: "#fff" }} headerText={`Hey Chef, what's on the menu?`} />
        <View style={{ padding: 20, color: "#3c444c" }}>
            <View>
              <Text style={{ fontSize: 22, fontWeight: "300", color: "#fff" }}>Seasoning</Text>
              {/* seasoning list */}
              <SeasoningCard />
            </View>
            <View>
              <Text style={{ fontSize: 22, fontWeight: "300", color: "#fff" }}>Sauces and Dips</Text>
              {/* sauce and dip list */}
              <SauceCard />
            </View>
        </View>
      </Animated.View>

      <Animated.ScrollView style={{
        transform: [
          {
            translateY: scrollY.interpolate({
              inputRange: [0, 170, 250],
              outputRange: [0, 0, 100],
              extrapolate: "clamp",
          })
        }
      ]
    }}
        //contentContainerStyle={styles.content}
        //onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        //  useNativeDriver: true,
        //})}
        //scrollEventThrottle={1}
      >
      {/* recipe list filter */}
      <View style={{ marginTop: 5, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "300", color: "#fff" }}>Recipes</Text>
        {/* Container for the recipe card area */}
        <View style={{ flex: 1 }}>
          {/* recipe list */}
          <RecipeCard />
        </View>
      </View>
    </Animated.ScrollView>

    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});









//            {/* search filter */}
//            {/*<SearchFilter icon="search" placeholder="enter your fav recipe" />*/}
//            {/* categories filter */}
//            {scrollY._value < scrollThreshold && (
//              <View>
//               <Text style={{ fontSize: 22, fontWeight: "300" }}>Categories</Text>
//                {/* categories list */}
//                <CategoriesFilter />
//              </View>
//            )}