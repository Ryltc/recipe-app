import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable, ImageBackground } from "react-native";
import { sauceList, colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SeasoningCard = () => {
	const navigation = useNavigation();
	return (
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
							<Text
								style={{
									fontSize: 18,
									fontWeight: 400,
									color: "#fff",
								}}
							>
								{item.name}</Text>
						</View>
					</Pressable>
				)}
			/>
	);
};

export default SeasoningCard;

const styles = StyleSheet.create({});