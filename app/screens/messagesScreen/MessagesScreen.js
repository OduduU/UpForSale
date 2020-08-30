import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../../components/listItem/ListItem";
import Screen from "../Screen";
import ListItemSeparator from "../../components/listItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../../components/listItemDeleteAction/ListItemDeleteAction";

const messages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../../assets/mosh.jpg"),
	},
];

function MessagesScreen() {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log("Message Selected", item)}
						renderRightActions={ListItemDeleteAction}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default MessagesScreen;
