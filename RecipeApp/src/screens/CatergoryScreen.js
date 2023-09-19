import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from "react-native";
import React from "react";
import Header from "../components/Header";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 50,  }}>

            {/* render header */}

            <Header headerText={"Hi, ${username} "} headerIcon={"bell-o"}/>

            {/* categories filter */}

            <View>
                <Text style={{ fontSize: 22, fontWeight: "300", }} > Catagories</Text>

                {/* categories list */}
                <CategoriesFilter />
            </View>

            {/* recipe list filter */}

            <View style={{ marginTop: 22, flex: 1}}>
                <Text style={{ fontSize: 22, fontWeight: "300" }}>Recipes</Text>
                {/* recipe list */}

                <RecipeCard />

            </View>
        </SafeAreaView>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({});