import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ViewImageScreen() {
	return (
		<View style={styles.background}>
			<View style={styles.buttonContainer}>
				<MaterialCommunityIcons name="close" color="white" size={30} />
				<MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
			</View>
			<Image source={require("../../assets/chair.jpg")} style={styles.viewImage} />
		</View>
		// <View style={styles.container}>
		// 	<View style={styles.closeIcon} />
		// 	<View style={styles.deleteIcon} />
		// 	<Image style={styles.image} source={require("../assets/chair.jpg")} />
		// </View>
	);
}

// const styles = StyleSheet.create({
// 	closeIcon: {
// 		width: 50,
// 		height: 50,
// 		backgroundColor: "#fc5c65",
// 		position: "absolute",
// 		top: 40,
// 		left: 30,
// 	},
// 	container: {
// 		backgroundColor: "#000",
// 		flex: 1,
// 	},
// 	deleteIcon: {
// 		width: 50,
// 		height: 50,
// 		backgroundColor: "#4ecdc4",
// 		position: "absolute",
// 		top: 40,
// 		right: 30,
// 	},
// 	image: {
// 		width: "100%",
// 		height: "100%",
// 		resizeMode: "contain",
// 	},
// });

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: colors.black,
	},
	buttonContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		position: "absolute",
		top: 30,
		paddingHorizontal: 25,
	},
	viewImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
		marginTop: 25,
	},
});

export default ViewImageScreen;
