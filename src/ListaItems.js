import React from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Spacer, VStack } from "native-base";

class ListaItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: [this.props.route.params.data.objetos],
			error: null,
			searchValue: "",
		};
		this.arrayholder = [this.props.route.params.data.objetos];
		this.clase = [this.props.route.params.clase];
	}

	searchFunction = (text) => {
		const updatedData = this.arrayholder[0].filter((item) => {
			const item_data = `${item.titulo.toUpperCase()})`;
			const text_data = text.toUpperCase();
			return item_data.indexOf(text_data) > -1;
		});
		this.setState({ data: updatedData, searchValue: text });
	};

	render() {
		const cards = [];
		let objetos = [];
		if (this.state.data.length < 2) {
			if (this.state.data.length == 0) objetos = [];
			else if (this.state.data[0].length > 1) objetos = this.state.data[0];
			else if (this.state.searchValue.length == 0)
				objetos = this.arrayholder[0];
			else objetos = [this.state.data[0]];
		} else objetos = this.state.data;

		if (objetos == undefined) objetos = [];

		let titulos = objetos.map(function (objeto, i) {
			cards.push({ id: "" + i, title: objeto.titulo, objeto: objeto });

			return objeto.titulo;
		});

		return (
			<View style={styles.container}>
				<SearchBar
					placeholder="Escribe aquí..."
					value={this.state.searchValue}
					onChangeText={(text) => this.searchFunction(text)}
					autoCorrect={false}
					lightTheme
					round
				/>
				<ScrollView style={styles.buscador}>
					{cards.map((card) => {
						return (
							<VStack space={2} alignItems="center">
								<Button
									w="80%"
									h="16"
									colorScheme="blue"
									variant="subtle"
									_text={{
										fontSize: 16,
									}}
									onPress={() =>
										this.props.navigation.navigate("Item", {
											data: card.objeto,
											clase: this.clase,
										})
									}
								>
									{card.title}
								</Button>
								<Spacer />
							</VStack>
						);
					})}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#D7F7FF",
	},
	title: {
		fontSize: 35,
		textAlign: "center",
		marginVertical: 20,
	},
	buscador: {
		paddingTop: 10,
	},
});

export default ListaItems;
