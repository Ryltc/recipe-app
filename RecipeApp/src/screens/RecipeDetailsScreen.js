import { Image, SafeAreaView, StyleSheet, Text, View, Pressable, Dimensions, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailScreen = ({ navigation, route }) => {
    const { item } = route.params;

    console.log(item);
    return (
        <View style={{ backgroundColor: item.color, flex: 1 }}>
            <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
                <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                    <FontAwesome
                        name={"arrow-circle-left"}
                        size={28}
                        color="black"
                        style={{ flex: 1 }}
                    />
                </Pressable>
                <FontAwesome
                    name={"heart-o"}
                    size={28}
                    color="black"
                    />
            </SafeAreaView>
            <View
                style={{
                    backgroundColor: "#fff",
                    flex: 1,
                    marginTop: 240,
                    borderTopLeftRadius: 56,
                    borderTopRightRadius: 56,
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                    //  backgroundColor: "red",
                        height: 300,
                        width: 300,
                        position: "absolute",
                        top: -150,
                    }}
                >
                    <Image
                        source={item.image}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain"
                        }}
                    />
            </View>

            {/*Recipe Name*/}
            <Text style={{ marginTop: 150, fontSize: 28, fontWeight: "300" }}>
                {item.name}
            </Text>

            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/*Recipe Description*/}
                    <Text style={{ fontSize: 20, marginVertical: 16 }}>
                        {item.description}
                    </Text>
                    {/*Recipe Details*/}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // width: "100%",
                            // backgroundColor: "green",
                        }}
                    >

                    </View>
                </ScrollView>
            </View>
        </View>
    </View>
    );
};

export default RecipeDetailScreen;
const styles = StyleSheet.create({});