import React from "react";
import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { recipeList, colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
	const navigation = useNavigation();
	return (
			<FlatList
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={{
							backgroundColor:"#a4330d",
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
						}}
					>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center", borderRadius: 400/ 2, }}
						/>
						<Text style={{ fontWeight: 400, color: "#fff" }}>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8, alignContent: "center", alignItems: "center" }}>
							<Text style={{ color: "#FAF9F6" }}>⏰ </Text>
							<Text style={{ color: "#FAF9F6" }}>{item.time} </Text>
							{/*<Text> | </Text>
								<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									name="star"
									size={16}
									color={colors.COLOR_PRIMARY}
								/>
							</View>*/}
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/>
	);
};

export default RecipeCard;

const styles = StyleSheet.create({});