import React from 'react';
import { StyleSheet,Button, View } from 'react-native';

class MainScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.botones}>
          <Button
            title="Fármacos"
            onPress={() =>
              this.props.navigation.navigate('Farmacos')
            }
          />
          <Button
            title="Urgencias"
            onPress={() =>
              this.props.navigation.navigate('Menu')
            }
          />
          <Button
            title="Protocolos"
            disabled={true}
            onPress={() =>
              this.props.navigation.navigate('Menu')
            }
            
          />  
        </View>      
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
  botones: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 100,
    margin: 20,
  },
});

export default MainScreen;