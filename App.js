import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	Image,
	SafeAreaView,
	Button,
	Alert,
	Platform,
	StatusBar,
	Dimensions,
} from "react-native";
import {
	useDimensions,
	useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/welcomeScreen/WelcomeScreen";
import ViewImageScreen from "./app/screens/viewImageScreen/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton/AppButton";
import Card from "./app/components/Card.js/Card";
import ListingDetailsScreen from "./app/screens/listingDetailsScreen/ListingDetailsScreen";

export default function App() {
	// console.log("Screen: ", Dimensions.get("screen"));
	// console.log("Window: ", Dimensions.get("window"));
	// console.log("useDimensions: ", useDimensions());
	// console.log("useDeviceOrientation: ", useDeviceOrientation());
	// const { landscape } = useDeviceOrientation();
	return (
		// <SafeAreaView style={styles.container}>
		// 	<Text
		// 		numberOfLines={3}
		// 		onPress={() => console.log("it should show you things")}
		// 	>
		// 		Hello World! So we're going to write so many much more random things that
		// 		people hardly notice. Hello World! So we're going to write so many much more
		// 		random things that people hardly notice. Hello World! So we're going to
		// 		write so many much more random things that people hardly notice.
		// 	</Text>
		// 	<TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
		// 		<Image
		// 			blurRadius={6}
		// 			loadingIndicatorSource={require("./assets/icon.png")}
		// 			fadeDuration={1000}
		// 			source={{
		// 				width: 100,
		// 				height: 100,
		// 				uri: "https://picsum.photos/200/300",
		// 			}}
		// 		/>
		// 	</TouchableWithoutFeedback>
		// 	<TouchableOpacity onPress={() => console.log("Image tapped")}>
		// 		<Image
		// 			loadingIndicatorSource={require("./assets/icon.png")}
		// 			fadeDuration={1000}
		// 			source={{
		// 				width: 100,
		// 				height: 100,
		// 				uri: "https://picsum.photos/200/300",
		// 			}}
		// 		/>
		// 	</TouchableOpacity>
		// 	<TouchableHighlight onPress={() => console.log("Image tapped")}>
		// 		<Image
		// 			loadingIndicatorSource={require("./assets/icon.png")}
		// 			fadeDuration={1000}
		// 			source={{
		// 				width: 100,
		// 				height: 100,
		// 				uri: "https://picsum.photos/200/300",
		// 			}}
		// 		/>
		// 	</TouchableHighlight>
		// 	<TouchableNativeFeedback onPress={() => console.log("Image tapped native")}>
		// 		<View style={{ width: 100, height: 100, backgroundColor: "dodgerblue" }} />
		// 	</TouchableNativeFeedback>
		// 	<Button
		// 		onPress={
		// 			() =>
		// 				Alert.alert("Alert Title", "This is an Alert", [
		// 					{ text: "Yes", onPress: () => console.log("Yes tapped") },
		// 					{
		// 						text: "No",
		// 						onPress: () => console.log("No tapped"),
		// 					},
		// 					{ text: "Maybe", onPress: () => console.log("Maybe tapped") },
		// 				])
		// 			// Alert.prompt("Alert Title", "This is an Alert", (text) =>
		// 			// 	console.log(text)
		// 			// )
		// 		}
		// 		color="orange"
		// 		title="Click Me"
		// 	/>
		// 	<View
		// 		style={{
		// 			backgroundColor: "dodgerblue",
		// 			width: "100%",
		// 			height: landscape ? "100%" : "30%",
		// 		}}
		// 	/>
		// </SafeAreaView>
		// <View
		// 	style={{
		// 		backgroundColor: "#fff",
		// 		flex: 1,
		// 		// flexDirection: "row",
		// 		// justifyContent: "center",
		// 		// alignItems: "center",
		// 		// alignContent: "center",
		// 		// flexWrap: "wrap",
		// 	}}
		// >
		// 	<View
		// 		style={{
		// 			backgroundColor: "dodgerblue",
		// 			// flexBasis: 300,
		// 			// flexShrink: 1,
		// 			// flexGrow: 1,
		// 			flex: 8,
		// 		}}
		// 	>
		// 		<Image
		// 			source={require("./app/assets/background.jpg")}
		// 			style={styles.backgroundImage}
		// 		></Image>
		// 		<View
		// 			style={{
		// 				position: "absolute",
		// 				width: "100%",
		// 				display: "flex",
		// 				alignItems: "center",
		// 				top: 130,
		// 			}}
		// 		>
		// 			<View style={{ display: "flex", justifyContent: "center" }}>
		// 				<Image
		// 					source={require("./app/assets/logo-red.png")}
		// 					style={{ width: 80, height: 80, alignSelf: "center" }}
		// 				/>
		// 				<Text>Sell What You Don't Need</Text>
		// 			</View>
		// 		</View>
		// 	</View>
		// 	<View
		// 		style={{
		// 			backgroundColor: "tomato",
		// 			flex: 1,
		// 		}}
		// 	/>
		// 	<View
		// 		style={{
		// 			backgroundColor: "gold",
		// 			flex: 1,
		// 		}}
		// 	/>
		// 	<View
		// 		style={{
		// 			backgroundColor: "grey",
		// 			width: 100,
		// 			height: 100,
		// 		}}
		// 	/>
		// 	<View
		// 		style={{
		// 			backgroundColor: "greenyellow",
		// 			width: 100,
		// 			height: 100,
		// 		}}
		// 	/>
		// </View>
		// <WelcomeScreen />
		// <ViewImageScreen />
		// <View
		// 	style={{
		// 		flex: 1,
		// 		justifyContent: "center",
		// 		alignItems: "center",
		// 	}}
		// >
		// 	<View
		// 		style={{
		// 			backgroundColor: "dodgerblue",
		// 			width: 100,
		// 			height: 100,
		// 			borderWidth: 10,
		// 			borderColor: "royalblue",
		// 			borderTopColor: "pink",
		// 			borderRadius: 50,
		// 			shadowColor: "grey",
		// 			shadowOffset: { width: 10, height: 10 },
		// 			shadowOpacity: 1,
		// 			shadowRadius: 10,
		// 			// elevation: 20,
		// 			padding: 20,
		// 			paddingHorizontal: 10,
		// 			paddingLeft: 30,
		// 		}}
		// 	>
		// 		<View
		// 			style={{
		// 				backgroundColor: "gold",
		// 				width: 50,
		// 				height: 50,
		// 				borderRadius: 25,
		// 			}}
		// 		></View>
		// 	</View>
		// 	<View
		// 		style={{
		// 			backgroundColor: "tomato",
		// 			width: 100,
		// 			height: 100,
		// 			margin: 20,
		// 		}}
		// 	></View>
		// 	<AppText>I love React Native!</AppText>
		// 	<MaterialCommunityIcons name="email" size={50} color="gray" />
		// 	<AppButton title="Login" onPress={() => console.log("Nice Button!!")} />
		// </View>
		// <View
		// 	style={{
		// 		backgroundColor: "#f8f4f4",
		// 		padding: 20,
		// 		paddingTop: 80,
		// 	}}
		// >
		// 	<Card
		// 		title="Red jacket for sale"
		// 		subTitle="$100"
		// 		image={require("./app/assets/jacket.jpg")}
		// 	/>
		// </View>
		<ListingDetailsScreen />
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
// 		// alignItems: "center",
// 		// justifyContent: "center",
// 	},
// 	backgroundImage: {
// 		flex: 1,
// 		height: null,
// 		width: null,
// 		// resizeMode: "cover", // or 'stretch'
// 	},
// });
