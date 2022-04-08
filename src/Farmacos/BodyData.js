import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Card, Text } from "react-native-elements";

class BodyData extends React.Component {
	render() {
		let objeto = this.props.data;
		return (
			<ScrollView>
				<Card>
					<Text style={styles.title}>{objeto.titulo}</Text>
					{writePosologia(objeto.posologia)}

					<Text style={styles.subtitle}>
						Efectos Secundarios: {"\n"}
						{objeto.efectossecundarios.map((efecto) => {
							return writeEfectosSecundarios(efecto);
						})}
						{"\n"}Embarazo y lactancia:{" "}
						<Text style={styles.text}>{objeto.embarazo}</Text> {"\n"}
					</Text>
					<Text style={styles.subtitle}>
						Presentaciones comerciales: {"\n"}
						{objeto.presentacionescomerciales.map((pres) => {
							return writePresentacionesComerciales(pres);
						})}
						{writeNota(objeto.nota)}
					</Text>
				</Card>
			</ScrollView>
		);
	}
}

function writePosologia(objeto) {
	let niños =
		objeto.ninos.length == 0 ? (
			""
		) : (
			<Text style={styles.subsubtitle}>
				{"\n"}-Niños:{"\n"}
			</Text>
		);
	return (
		<Text style={styles.subtitle}>
			Posología:{"\n"}
			<Text style={styles.subsubtitle}>-Adultos:{"\n"}</Text>
			{objeto.adultos.map(function (adulto) {
				return <Text style={styles.text}>{"\t" + adulto + "\n"}</Text>;
			})}
			{niños}
			{objeto.ninos.map(function (nino) {
				return <Text style={styles.text}>{"\t" + nino + "\n"}</Text>;
			})}
		</Text>
	);
}

function writeEfectosSecundarios(objeto) {
	return (
		<Text style={styles.text}>
			{"\t * "}
			{objeto}
			{"\n"}
		</Text>
	);
}

function writePresentacionesComerciales(pres) {
	let titulo = pres.titulo != "" ? "\n -" + pres.titulo + ": \n" : "";
	return (
		<Text style={styles.subsubtitle}>
			{titulo}
			{pres.pres.map(function (presConcreto) {
				return (
					<Text style={styles.text}>
						{"\t * "}
						{presConcreto}
						{"\n"}
					</Text>
				);
			})}
		</Text>
	);
}

function writeNota(nota) {
	console.log(nota);
	if (nota != "") {
		return (
			<Text>
				{"\n"} Notas: {"\n"} <Text style={styles.text}>{nota}</Text> {"\n"}
			</Text>
		);
	} else return <Text></Text>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 23,
		textAlign: "center",
		marginVertical: 20,
	},
	subtitle: {
		fontSize: 20,
		marginLeft: 10,
	},
	subsubtitle: {
		fontSize: 18,
		marginLeft: 20,
	},
	text: {
		fontSize: 16,
		marginLeft: 25,
		marginTop: 10,
	},
});

export default BodyData;
