import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import SeasoningDetailScreen from '../screens/SeasoningDetailScreen';
import SauceDetailScreen from '../screens/SauceDetailScreen';
import { TimerProvider } from '../components/TimerContext';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TimerProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="RecipeList" component={RecipeListScreen} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
          <Stack.Screen name="SeasoningDetail" component={SeasoningDetailScreen} />
          <Stack.Screen name="SauceDetail" component={SauceDetailScreen} />
        </Stack.Navigator>
      </TimerProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;


const styles = StyleSheet.create({});