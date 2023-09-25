import React from "react";
import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { spiceList, colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SeasoningCard = () => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={spiceList}
				horizontal={true}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("SeasoningDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							marginRight: 40,
							borderRadius: 8,
							paddingHorizontal: 10,
							paddingVertical: 10,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,								marginVertical: 16,
						}}
					>
						<Image
						source={item.image}
						style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
						<Text style={{ fontWeight: 400 }}>{item.name}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default SeasoningCard;

const styles = StyleSheet.create({});