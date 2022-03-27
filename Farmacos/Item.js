import React from 'react';
import { StyleSheet, View } from 'react-native';
import BodyData from './BodyData';

class Item extends React.Component {
  render(){
    let data = this.props.route.params.data
    console.log(this.props)
    return(
        <View>
            <BodyData data={data}/>
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