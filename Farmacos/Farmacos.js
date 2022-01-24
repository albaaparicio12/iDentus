import React from 'react';
import { StyleSheet, Text,Button,ScrollView, View } from 'react-native';

class Farmacos extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fármacos</Text>
        <View style={styles.botones}>
          <Button
            title="Antibióticos"
            onPress={() =>
              this.props.navigation.navigate('Antibioticos')
            }
          />
          <Button
            title="Analgésicos"
            onPress={() =>
              this.props.navigation.navigate('Analgesicos')
            }
          />
          <Button
            title="Corticoides"
            onPress={() =>
              this.props.navigation.navigate('Corticoides')
            }            
          />  
          <Button
            title="Anestésicos"
            onPress={() =>
              this.props.navigation.navigate('Anestesicos')
            }            
          />
          <Button
            title="Otros"
            onPress={() =>
              this.props.navigation.navigate('Otros')
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

export default Farmacos;