import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 16,
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default styles;
