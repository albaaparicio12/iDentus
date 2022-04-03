import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>iDental</Text>

        <Button
          title="Comenzar"
          onPress={() =>
            this.props.navigation.navigate('Menu')
          }
        />
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
    fontSize: 50,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default HomeScreen;