import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories, colors } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const CategoriesFilter = () => {
	const navigation = useNavigation();
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{categories.map((category, index) => {
					return (
						<View
							key={index}
							style={{
								backgroundColor: "#ed6e3a",
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
							<Pressable style={{ backgroundColor: "#ed6e3a" }}
								onPress={() => navigation.navigate("RecipeDetail", { item: item })}>
								<Text
									style={{
										color: index === 0 && colors.COLOR_LIGHT,
										fontSize: 18,
										fontWeight: 400,
									}}
								>
									{category.category}
								</Text>
							</Pressable>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default CategoriesFilter;

const styles = StyleSheet.create({});