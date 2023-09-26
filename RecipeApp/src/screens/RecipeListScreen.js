import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import SeasoningCard from "../components/SeasoningCard";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor: "#121212", flex: 1, marginHorizontal: 20, marginTop: 50,  }}>

            {/* render header */}

            <Header headerText={"Hi, ${username} "} headerIcon={"bell-o"}/>

            {/* search filter */}

            <SearchFilter icon="search" placeholder={"enter your fav recipe"}/>

            {/* categories filter */}

            <View>
                <Text style={{ fontSize: 22, fontWeight: "300", }} > Catagories</Text>

                {/* categories list */}

                <CategoriesFilter />
            </View>

            <View>
                <Text style={{ fontSize: 22, fontWeight: "300" }}>Seasoning</Text>

                {/* seasoning list */}

                <SeasoningCard />
            </View>

            {/* recipe list filter */}

            <View style={{ marginTop: 5, flex: 1}}>
                <Text style={{ fontSize: 22, fontWeight: "300" }}>Recipes</Text>

                {/* recipe list */}

                <RecipeCard />

            </View>
        </SafeAreaView>
    );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});