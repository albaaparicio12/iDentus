import React from 'react';
import { StyleSheet, View } from 'react-native';
import BodyData from './BodyData';

class Item extends React.Component {
  render(){
    let objeto = this.props.objeto
    return(
        <View>
            <BodyData data={objeto}/>
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