import React from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { Card, Text } from "react-native-elements";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

class BodyUrgenciasData extends React.Component {
	render() {
		let objeto = this.props.data;
		return (
			<ScrollView>
				<Card>
					<Text style={styles.title}>{objeto.titulo}</Text>
					<Text>{writePreContent(objeto.precontent)}</Text>
					<Text>
						{objeto.content.map((obj) => {
							{
								("\n");
							}
							return writeContent(obj);
						})}
					</Text>
					<Text>{writePostContent(objeto.postcontent)}</Text>
				</Card>
			</ScrollView>
		);
	}
}

function writePreContent(objeto) {
	if (typeof objeto === "string") {
		return writePreContentList(objeto);
	} else {
		return objeto.map((obj) => {
			return writePreContentList(obj);
		});
	}
}

function writePreContentList(obj) {
	if (obj.includes("1")) {
		return (
			<Text style={styles.text}>
				{"\n \t"}
				{obj}
				{"\n \n"}
			</Text>
		);
	} else {
		return (
			<Text style={styles.subsubtitle}>
				{obj}
				{"\n"}
			</Text>
		);
	}
}

function writePostContent(objeto) {
	if (typeof objeto === "string") {
		return (
			<Text>
				{objeto}
				{"\n"}
			</Text>
		);
	} else {
		return objeto.map((obj) => {
			return (
				<Text>
					{"\n"}
					{writeImage(obj)}
				</Text>
			);
		});
	}
}

function writeImage(objeto) {
	if (objeto.length == 1) {
		return (
			<View style={styles.container}>
				<ReactNativeZoomableView
					maxZoom={3}
					minZoom={0.5}
					zoomStep={0.2}
					initialZoom={1}
					bindToBorders={true}
					captureEvent={true}
				>
					{getImage(objeto)}
				</ReactNativeZoomableView>
			</View>
		);
	} else {
		return (
			<Text>
				{objeto}
				{"\n"}
			</Text>
		);
	}
}

function getImage(number) {
	if (number == "1") {
		return (
			<Image
				style={{ width: 300, height: 500 }}
				source={require("./1.png")}
				resizeMode={"contain"}
			/>
		);
	} else if (number == "2") {
		return (
			<Image
				style={{ width: 300, height: 500 }}
				source={require("./2.png")}
				resizeMode={"contain"}
			/>
		);
	} else if (number == "3") {
		return (
			<Image
				style={{ width: 320, height: 400 }}
				source={require("./3.png")}
				resizeMode={"contain"}
			/>
		);
	} else {
		return (
			<Image
				style={{ width: 320, height: 400 }}
				source={require("./4.png")}
				resizeMode={"contain"}
			/>
		);
	}
}

function writeContent(objeto) {
	if (typeof objeto === "string")
		return (
			<Text style={styles.text}>
				{"\t"}
				{objeto}
				{"\n"}
				{"\n"}
			</Text>
		);
	else {
		return (
			<Text>
				<Text style={styles.text}>
					{"\t"}
					{objeto.nivel1}
					{"\n"}
				</Text>

				{objeto.nivel2.map((n2) => {
					if (typeof n2 === "string")
						return (
							<Text style={styles.text}>
								{"\t \t"}
								{n2}
								{"\n"}
							</Text>
						);
					else {
						return n2.map((n3) => {
							return (
								<Text>
									{"\t \t \t"}
									{n3}
									{"\n"}
								</Text>
							);
						});
					}
				})}
			</Text>
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
		fontSize: 23,
		textAlign: "center",
		marginVertical: 20,
	},
	subtitle: {
		fontSize: 20,
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 10,
	},
	subsubtitle: {
		fontSize: 17,
		marginLeft: 20,
	},
	text: {
		fontSize: 16,
		marginLeft: 25,
		marginTop: 10,
	},
});

export default BodyUrgenciasData;
