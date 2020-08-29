import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import AppButton from "../../components/AppButton/AppButton";

function WelcomeScreen() {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../../assets/background.jpg")}
			blurRadius={2}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../../assets/logo-red.png")} />
				<Text style={styles.tagline}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="Login" />
				<AppButton title="Register" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonContainer: {
		padding: 20,
		width: "100%",
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#4ecdc4",
	},
	tagline: {
		fontSize: 18,
		fontWeight: "600",
		paddingVertical: 8,
	},
});

export default WelcomeScreen;
