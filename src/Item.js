import React from 'react';
import { StyleSheet, View } from 'react-native';
import BodyData from './Farmacos/BodyData';
import BodyUrgenciasData from './Urgencias/BodyUrgenciasData';

class Item extends React.Component {
  render(){
    let data = this.props.route.params.data
    let clase = this.props.route.params.clase
    return(
        <View>
          {(clase == 'farmacos')? <BodyData data={data}/> : <BodyUrgenciasData data={data}/> }
        </View>
    )
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

export default Item;