import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText/AppText";
import colors from "../../config/colors";

function ListItem({
	title,
	subTitle,
	image,
	ImageComponent,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{ImageComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						{title && <AppText style={styles.title}>{title}</AppText>}
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		alignItems: "center",
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	title: {
		fontWeight: "500",
	},
	subTitle: {
		color: colors.medium,
	},
});

export default ListItem;
