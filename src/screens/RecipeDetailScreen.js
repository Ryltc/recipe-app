import { Image, SafeAreaView, StyleSheet, Text, View, Pressable, Dimensions, ScrollView, TouchableOpacity, Button, TextInput } from "react-native";
import React, {useState} from "react";
import Checkbox from 'expo-checkbox';
import { FontAwesome } from "@expo/vector-icons";
//import ingredientImages from "../Constant";
//import { recipeList } from "../Constant";
import { recipeIngredients } from "../Constant";
//import Timer from "../components/Timer";
//import { TimerProvider } from './TimerContext';
import { useTimer } from './TimerContext';

const RecipeDetailScreen = ({ route, navigation }) => {
	const { item } = route.params;
	console.log("Item:", item);
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
	}

	const RecipeDetailScreen = () => {
		const { timers, addTimer, removeTimer, startTimer, updateTimer } = useTimer();

		const [customTime, setCustomTime] = useState('');

		const handleAddTimer = () => {
		  const timeInSeconds = parseInt(customTime, 10);
		  if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
			addTimer(timeInSeconds);
			setCustomTime('');
		  } else {
			// Handle invalid input
			alert('Please enter a valid time in seconds.');
		  }
		};

		const handleRemoveTimer = (timerId) => {
		  removeTimer(timerId);
		};

		const handleStartTimer = (timerId) => {
		  startTimer(timerId);
		};

	const ingredientImages = recipeIngredients[item.folder];
	console.log("Ingredient Images:", ingredientImages);

	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 50 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>

				{/*<FontAwesome name={"heart-o"} size={28} color="white" />*/}
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#a4330d",
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
				<Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold", color: "#FAF9F6" }}>
					{item.name}
				</Text>
				<Text style={{ paddingBottom: 2, marginTop: 2, fontSize: 20, fontStyle: 'italic', color: "#FAF9F6" }}>
					Chef: {item.chef}
				</Text>
				<Text style={styles.textRegister}> ──────────────────────────────── </Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<Text style={{ fontSize: 20, marginVertical: 16, color: "#FAF9F6", fontStyle: 'italic' }}>
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
								<Text style={{ fontSize: 20, fontWeight: 400, color: "#FAF9F6" }}>
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
								<Text style={{ fontSize: 20, fontWeight: 400, color: "#FAF9F6" }}>
									{item.difficulty}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(255, 165, 0, 0.48)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>🔥</Text>
								<Text style={{ fontSize: 20, fontWeight: "400", color: "#FAF9F6" }}>
									{item.calories}
								</Text>
							</View>
						</View>

						{/* Recipe Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: 400, marginBottom: 6, color: "#FAF9F6", }}
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
											<Text style={{ fontSize: 18, marginLeft: 6, marginRight: 6, fontWeight: 300, color: "#FAF9F6" }}>
												{ingredient}
											</Text>
									</View>
								);
							})}
						</View>

						{/* Recipe Steps */}

						<View>
							{timers.map((timer) => (
								<View key={timer.id}>
								<Text>{timer.seconds}</Text>
								<Button title="Start" onPress={() => handleStartTimer(timer.id)} />
								<Button title="Remove" onPress={() => handleRemoveTimer(timer.id)} />
								</View>
							))}
							<TextInput
								placeholder="Enter time in seconds"
								value={customTime}
								onChangeText={(text) => setCustomTime(text)}
								keyboardType="numeric"
							/>
							<Button title="Add Custom Timer" onPress={handleAddTimer} />
						</View>

						<View style={{ alignSelf: "flex-start", marginVertical: 22, marginRight: 16, }}>
							<Text
								style={{ fontSize: 22, fontWeight: 300, color: "#FAF9F6", }}
							>
								Steps:
							</Text>
							{item.steps.map((step, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
										>
										<Checkbox
												style={styles.checkbox}
												color="#00FF00"
												value={checkedSteps.includes(step)}
												onValueChange={() => handleStepChange(step)}
										/>
										<Text
											style={{ flexShrink: 1, fontSize: 18, fontWeight: 700, marginLeft: 6, marginRight: 6, marginVertical: 6, color: "#FAF9F6", fontWeight: 300 }}
											key={index}
											>{`${index + 1} ) ${step}`}
										</Text>
									</View>
									);
								})}
							</View>

						{/* META and Description: SEO for web integration */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", color: "#FAF9F6", fontStyle: 'italic' }}
							>
								{item.meta}
							</Text>
							<Text
								style={{ fontSize: 22, fontWeight: "600", color: "#FAF9F6", fontStyle: 'italic' }}
							>
								{item.conclusion}
							</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
}};

export default RecipeDetailScreen;
const styles = StyleSheet.create({});