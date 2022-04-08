import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { VStack, HStack, Flex, Button } from "native-base";

class MainScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<VStack space={3} alignItems="center">
					<Flex h={40} alignItems="center">
						<HStack space={2} justifyContent="center">
							<Button
								leftIcon={
									<MaterialIcons
										name="medical-services"
										size={40}
										color="#FFB250"
									/>
								}
								colorScheme="blue"
								size="lg"
								variant="outline"
								onPress={() => this.props.navigation.navigate("Farmacos")}
							>
								Fármacos
							</Button>
						</HStack>
					</Flex>
					<Flex h={40} alignItems="center">
						<HStack space={2} justifyContent="center">
							<Button
								leftIcon={
									<MaterialIcons name="coronavirus" size={40} color="#FFB250" />
								}
								colorScheme="blue"
								size="lg"
								variant="outline"
								onPress={() =>
									this.props.navigation.navigate("Urgencias", {
										data: require("./Urgencias/urgencias.json"),
										clase: "urgencias",
									})
								}
							>
								Urgencias
							</Button>
						</HStack>
					</Flex>
					<Flex h={40} alignItems="center">
						<HStack space={2} justifyContent="center">
							<Button
								leftIcon={
									<MaterialIcons
										name="local-hospital"
										size={40}
										color="#FFB250"
									/>
								}
								size="lg"
								colorScheme="blue"
								variant="outline"
								isDisabled
								onPress={() => this.props.navigation.navigate("Menu")}
							>
								Protocolos
							</Button>
						</HStack>
					</Flex>
				</VStack>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
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
		margin: 20,
	},
});

export default MainScreen;
