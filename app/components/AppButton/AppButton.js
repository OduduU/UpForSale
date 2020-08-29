import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import styles from "./AppButton.style";
import colors from "../../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

export default AppButton;
