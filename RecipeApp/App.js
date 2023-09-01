import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function App() {
  return <AppNavigator />;
}