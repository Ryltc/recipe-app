import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable, ImageBackground } from "react-native";
import { sauceList, colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SeasoningCard = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={sauceList}
				horizontal={true}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("SauceDetail", { item: item })}
						style={{
							backgroundColor: "#6c9e4f",
							marginRight: 40,
							borderRadius: 8,
							paddingHorizontal: 10,
							paddingVertical: 10,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							marginVertical: 16,
						}}
					>
						<View style={{ }}>
							<ImageBackground
							style={{ width: 150, height: 50, resizeMode: "center" }}
							source={'../../assets/images/Episjar.png'}>
							<Text style={{ fontColor: "white", fontWeight: 400, textAlign: "center", paddingVertical: 15 }}>{item.name}</Text>
							</ImageBackground>
						</View>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default SeasoningCard;

const styles = StyleSheet.create({});