import { Image, SafeAreaView, StyleSheet, Text, View, Pressable, Dimensions, ScrollView, } from "react-native";
import Checkbox from 'expo-checkbox';
//import "rsuite/dist/rsuite.min.css";
//import { Checkbox, CheckboxGroup } from "rsuite"; 
import React, {useState} from "react";
import { FontAwesome } from "@expo/vector-icons";

const SeasoningDetailScreen = ({ navigation, route }) => {
    const { item } = route.params;

	console.log(item);

	const [checkedIngredients, setCheckedIngredients] = useState([]);
	const [checkedSteps, setCheckedSteps] = useState([]);

	const handleIngredientChange = (ingredient) => {
		if (checkedIngredients.includes(ingredient)) {
		  setCheckedIngredients(checkedIngredients.filter((item) => item !== ingredient));
		} else {
		  setCheckedIngredients([...checkedIngredients, ingredient]);
		}
	  };

	const handleStepChange = (step) => {
		if (checkedSteps.includes(step)) {
		  setCheckedSteps(checkedSteps.filter((item) => item !== step));
		} else {
		  setCheckedSteps([...checkedSteps, step]);
		}
	  };


	return (
		<View style={{ backgroundColor: "#121212", flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 50 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>

				<FontAwesome name={"heart-o"} size={28} color="white" />
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#6c9e4f",
					flex: 1,
					marginTop: 140,
					borderTopLeftRadius: 56,
					borderTopRightRadius: 56,
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						// backgroundColor: "red",
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
					}}
				>
					<Image
						source={item.image}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
							borderRadius: 400/ 2,
						}}
					/>
				</View>

				{/* Recipe Name */}
				<Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
					{item.name}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<Text style={{ fontSize: 20, marginVertical: 16 }}>
							{item.description}
						</Text>

						{/* Recipe Extra Details */}

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								// width: "100%",
								// backgroundColor: "green",
							}}
						>
							<View
								style={{
									backgroundColor: "rgba(255, 0, 0, 0.38)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>⏰</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.time}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
									// marginHorizontal: 24,
								}}
							>
								<Text style={{ fontSize: 40 }}>🥣</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.difficulty}
								</Text>
							</View>
						</View>

						{/* Seasoning Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Ingredients:
							</Text>
							{item.ingredients.map((ingredient, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										{/*<View
											style={{
												backgroundColor: "red",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>*/}
											<Checkbox
												style={styles.checkbox}
												color="#00FF00"
												value={checkedIngredients.includes(ingredient)}
												onValueChange={() => handleIngredientChange(ingredient)}
											/>
											<Text style={{ fontSize: 18, marginLeft: 6 }}>
												{ingredient}
											</Text>
									</View>
								);
							})}
						</View>

						{/* Seasoning Steps */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<View style={{ flexDirection: 'row', marginBottom: 20, }}></View>
								<Text
									style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
								>
									Steps:
								</Text>
								{item.steps.map((step, index) => {
									return (
										<View>
											<Checkbox
												style={styles.checkbox}
												color="#00FF00"
												value={checkedSteps.includes(step)}
												onValueChange={() => handleStepChange(step)}
											/>
											<Text
												style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
												key={index}
											>{`${index + 1} ) ${step}`}</Text>
										</View>
									);
								})}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default SeasoningDetailScreen;
const styles = StyleSheet.create({});