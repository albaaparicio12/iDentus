import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';

class Otros extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Otros</Text>   
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

export default Otros;