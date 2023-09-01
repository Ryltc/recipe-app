import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from "react-native";
import React from "react";
import Header from "../components/Header";

const RecipeListScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop: 50,  }}>
            <Header headerText={"Hi, John "} headerIcon={"bell-o"}/>
        </SafeAreaView>
    );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});