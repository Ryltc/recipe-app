import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ( { navigation }) => {
    return (
        <View style={{ backgroundColor: "#121212", flex: 1, alignItems: "center" }}>
                <Image
                    source={require("../../assets/images/chef-hector.png")}
                    style={{
                        marginTop: 100,
                        width: 300,
                        height: 300,
                        borderRadius: 400/ 2,
                    }}
                />

                <Text style={{ marginTop: 50, color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
                    La Cocina de Héctor
                </Text>

                <Text style={{
                    fontSize: 42,
                    fontWeight: "bold",
                    color: "#3c444c",
                    marginTop: 44,
                    marginBottom: 40,
                    }}
                >
                    Cook Like Héctor
                </Text>

                <TouchableOpacity
                    onPress={()=>navigation.navigate("RecipeList")}
                    style={{
                        backgroundColor: "#f96163",
                        borderRadius: 18,
                        paddingVertical: 18,
                        width: "80%",
                        alignItems: "center",
                    }}
                >
                        <Text style={{
                            fontSize: 18,
                            color: "#fff",
                            fontWeight: "500",
                        }}>Lets Cook! </Text>
                </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});