import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ children }) {
	return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		color: "green",
		fontSize: 18,
		fontFamily: "Roboto",
		// ...Platform.select({
		// 	ios: {
		// 		fontSize: 20,
		// 		fontFamily: "Avenir",
		// 	},
		// 	android: {
		// 		fontSize: 18,
		// 		fontFamily: "Roboto",
		// 	},
		// }),
	},
});

export default AppText;
