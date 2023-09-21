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
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("SeasoningDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 13,
						}}
					>
						<Image
							source={item.image}
							style={{ width: 150, height: 50, resizeMode: "center" }}
						/>
						<Text style={{ fontWeight: 400 }}>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.time}</Text>
							<Text> | </Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									name="star"
									size={16}
									color={colors.COLOR_PRIMARY}
								/>
							</View>
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default SeasoningCard;

const styles = StyleSheet.create({});