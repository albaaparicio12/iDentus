import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar} from 'react-native-elements';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Item from './Item';

class ListaFarmacos extends React.Component {

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render(){
    const { search } = this.state;
    let data = this.props.route.params.data;
    const cards = []
    let titulos = data.objetos.map(function(objeto,i){
      cards.push({id: ""+i, title: objeto.titulo, objeto:objeto})
        return objeto.titulo
    })

    return (
        <View>
          <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={Boolean.True}
          />
          
          <ScrollView>
            {
              cards.map(card => {
                return(
                  
                    <Button buttonStyle={{borderRadius: 10, marginLeft: 15, marginRight: 15, marginBottom: 15}} 
                    title={card.title} onPress={() => this.props.navigation.navigate('Item', {data: card.objeto})}>

                    </Button>
                  
                )
              })
            }
          </ScrollView>
            
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

export default ListaFarmacos;