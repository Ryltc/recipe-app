import { StyleSheet, Text, View, SafeAreaView, ScrollView, Animated  } from "react-native";
import React, { useRef } from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import SeasoningCard from "../components/SeasoningCard";
import RecipeCard from "../components/RecipeCard";



const RecipeListScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const translateHeader = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [0, -80],
        extrapolate: 'clamp',
      });

    return (
      <SafeAreaView style={{ backgroundColor: "#5e3c2c", flex: 1, paddingHorizontal: 20, marginTop: 50 }}>
        <Animated.View style={{ transform: [{ translateY: translateHeader }] }}>
          {/* render header */}
          <Header headerText={`Hey Chef, lets cook!`} headerIcon="bell-o" />
            <View style={{ padding: 20 }}>
                {/* search filter */}
                <SearchFilter icon="search" placeholder="enter your fav recipe" />
                {/* categories filter */}
                <View>
                <Text style={{ fontSize: 22, fontWeight: "300" }}>Categories</Text>

                {/* categories list */}
                <CategoriesFilter />
                </View>
                <View>
                <Text style={{ fontSize: 22, fontWeight: "300" }}>Seasoning</Text>

                {/* seasoning list */}
                <SeasoningCard />
                </View>
            </View>
        </Animated.View>

        <Animated.ScrollView
            contentContainerStyle={styles.content}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: true,
            })}
            scrollEventThrottle={1}
        >

            {/* recipe list filter */}
            <View style={{ marginTop: 5, flex: 1 }}>
              <Text style={{ fontSize: 22, fontWeight: "300" }}>Recipes</Text>

              {/* recipe list */}
              <RecipeCard />
            </View>
        </Animated.ScrollView>
        </SafeAreaView>
        );
      };

      export default RecipeListScreen;

      const styles = StyleSheet.create({});