import React from "react";
import { StyleSheet, View } from "react-native";
import { Image, Button, VStack } from "native-base";

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<VStack space={2} alignItems="center" justifyContent="center">
					<Image
						style={{ width: 300, height: 140 }}
						source={require("./logoInicio.png")}
						resizeMode={"contain"}
					/>

					<Button
						size="lg"
						colorScheme="blue"
						variant="ghost"
						onPress={() => this.props.navigation.navigate("Menu")}
					>
						Comenzar
					</Button>
				</VStack>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 50,
		textAlign: "center",
		marginVertical: 20,
	},
});

export default HomeScreen;
