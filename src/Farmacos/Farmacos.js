import React from 'react';
import { StyleSheet,Button, View } from 'react-native';


class Farmacos extends React.Component {
  constructor(){
    super()
    this.state = {
      data:''
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.botones}>
          <Button
            title="Antibióticos"
            onPress={() =>
              this.props.navigation.navigate('Antibioticos', {data: require('./antibioticos.json'), clase: "farmacos"})
            }
          />
          <Button
            title="Analgésicos"
            onPress={() =>
              this.props.navigation.navigate('Analgesicos', {data: require('./analgesicos.json'), clase: "farmacos"})
            }
          />
          <Button
            title="Corticoides"
            onPress={() =>
              this.props.navigation.navigate('Corticoides', {data: require('./corticoides.json'), clase: "farmacos"})
            }            
          />  
          <Button
            title="Anestésicos"
            disabled={true}
            onPress={() =>
              this.props.navigation.navigate('Anestesicos')
            }            
          />
          <Button
            title="Espectro antibióticos"
            onPress={() =>
              this.props.navigation.navigate('Espectro')
            }            
          />
          <Button
            title="Categorías farmacológicas (FDA)"
            onPress={() =>
              this.props.navigation.navigate('FDA')
            }            
          />
          <Button
            title="Otros"
            disabled={true}
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
    margin: 15,
  },
});

export default Farmacos;