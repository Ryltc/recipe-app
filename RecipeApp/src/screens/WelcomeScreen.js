import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ( { navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={require("../../assets/images/welcome1.png")} />

            <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
                Select Superior Recipes
            </Text>

            <Text style={{
                fontSize: 42,
                fontWeight: "bold",
                color: "#3c444c",
                marginTop: 44,
                marginBottom: 40,
                }}
                >
                Cook Like Hector
            </Text>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("RecipeList")}
            style={{
                backgroundColor: "#f96163",
                borderRadius: 18,
                paddingVertical: 18,
                width: "80%",
                alignItems: "center",}}>
                <Text style={{
                    fontSize: 18,
                    color: "#fff",
                    fontWeight: "500",
                }}>Lets Go </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});