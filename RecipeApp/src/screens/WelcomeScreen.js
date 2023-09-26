import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

const WelcomeScreen = ( { navigation }) => {
    return (
        <View style={{ backgroundColor: "#121212", flex: 1, alignItems: "center" }}>
            <ImageBackground
                source={require("../assets/images/chef-hector.png")}
                style={{ flex: 1, resizeMode: 'cover',}}>
                <Image source={require("../../assets/images/welcome1.png")} />

                <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
                    La Cocina Alta
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
            </ImageBackground>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});