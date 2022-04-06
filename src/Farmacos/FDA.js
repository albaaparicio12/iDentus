import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView"

class FDA extends React.Component {
  render(){
    return (
      <View style={styles.container}>        
        <ReactNativeZoomableView
          maxZoom={3}
          minZoom={0.5}
          zoomStep={0.2}
          initialZoom={0.65}
          bindToBorders={true}
          captureEvent={true}>
        <Image 
            style={{width:800, height:300}}
            source={require('./FDA.png')}
          />
        </ReactNativeZoomableView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default FDA;