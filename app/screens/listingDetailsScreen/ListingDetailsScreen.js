import React from "react";
import { View, Image, StyleSheet } from "react-native";

import ListItem from "../../components/listItem/ListItem";
import AppText from "../../components/AppText/AppText";
import styles from "./listingDetailsScreen.style";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require("../../assets/jacket.jpg")} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../../assets/mosh.jpg")}
						title="Odudu"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
}

export default ListingDetailsScreen;
