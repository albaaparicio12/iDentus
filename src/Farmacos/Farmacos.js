import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, VStack } from "native-base";

class Farmacos extends React.Component {
	constructor() {
		super();
		this.state = {
			data: "",
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<VStack space={7} alignItems="center" justifyContent="center">
					<Button
						_text={{
							fontSize: 20,
						}}
						size="lg"
						colorScheme="blue"
						variant="outline"
						onPress={() =>
							this.props.navigation.navigate("Analgesicos", {
								data: require("./analgesicos.json"),
								clase: "farmacos",
							})
						}
					>
						Analgésicos
					</Button>
					<Button
						_text={{
							fontSize: 20,
						}}
						size="lg"
						colorScheme="blue"
						variant="outline"
						onPress={() =>
							this.props.navigation.navigate("Antibioticos", {
								data: require("./antibioticos.json"),
								clase: "farmacos",
							})
						}
					>
						Antibióticos
					</Button>

					<Button
						_text={{
							fontSize: 20,
						}}
						size="lg"
						colorScheme="blue"
						variant="outline"
						onPress={() => this.props.navigation.navigate("FDA")}
					>
						Categorías farmacológicas (FDA)
					</Button>
					<Button
						_text={{
							fontSize: 20,
						}}
						size="lg"
						colorScheme="blue"
						variant="outline"
						onPress={() =>
							this.props.navigation.navigate("Corticoides", {
								data: require("./corticoides.json"),
								clase: "farmacos",
							})
						}
					>
						Corticoides
					</Button>
					<Button
						_text={{
							fontSize: 20,
						}}
						size="lg"
						colorScheme="blue"
						variant="outline"
						onPress={() => this.props.navigation.navigate("Espectro")}
					>
						Espectro antibióticos
					</Button>

					<Button
						_text={{
							fontSize: 20,
						}}
						size="lg"
						colorScheme="blue"
						variant="outline"
						isDisabled
						onPress={() => this.props.navigation.navigate("Anestesicos")}
					>
						Anestésicos
					</Button>
					<Button
						_text={{
							fontSize: 20,
						}}
						size="lg"
						colorScheme="blue"
						variant="outline"
						isDisabled
						onPress={() => this.props.navigation.navigate("Otros")}
					>
						Otros
					</Button>
				</VStack>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#D7F7FF",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 35,
		textAlign: "center",
		marginVertical: 20,
	},
	botones: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: "#fff",
		padding: 100,
		margin: 15,
	},
});

export default Farmacos;
