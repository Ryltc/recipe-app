import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ headerText, headerIcon }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1, fontSize: 22, fontWeight: "700", paddingTop: 20, paddingLeft: 20, textAlign: "left", color: "#fff" }}>
                {headerText}
            </Text>

            <FontAwesome style={{ paddingTop: 20 }} name={headerIcon} size={24} color="#f96163" />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});