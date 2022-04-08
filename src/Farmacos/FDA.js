import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

class FDA extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<ReactNativeZoomableView
					maxZoom={3}
					minZoom={1}
					zoomStep={0.2}
					initialZoom={1}
					bindToBorders={true}
					captureEvent={true}
				>
					<Image
						style={{ width: 350, height: 400 }}
						source={require("./FDA.png")}
						resizeMode={"contain"}
					/>
				</ReactNativeZoomableView>
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
});

export default FDA;
