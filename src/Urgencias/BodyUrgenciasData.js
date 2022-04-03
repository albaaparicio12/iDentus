import { string } from 'prop-types';
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {Card, Text} from 'react-native-elements';

class BodyUrgenciasData extends React.Component{
    render(){        
        let objeto = this.props.data
            return(
                <ScrollView>
                    <Card>
                        <Text style= {styles.title}>
                            {objeto.titulo}
                        </Text>
                        <Text>
                            {writePrePostContent(objeto.precontent)}{"\n"}
                        </Text>                        
                        <Text>
                            {objeto.content.map(obj => {return(writeContent(obj))})}
                        </Text>
                        <Text>
                            {writePrePostContent(objeto.postcontent)}{"\n"}
                        </Text>
                    </Card>
                </ScrollView>
            )
    }
}

function writePrePostContent(objeto){
    if(typeof objeto === 'string'){
        return(<Text>{objeto}{"\n"}</Text>) 
    }else{
        return(objeto.map(obj => 
            {return( <Text>{obj}{"\n"}</Text>)}
            ))
    }
}
function writeContent(objeto){
    console.log(objeto)
    if(typeof objeto === 'string')
        return(<Text>{objeto}{"\n"}</Text>)
    else{
        return(
            <View>
                <Text>{objeto.nivel1}{"\n"}</Text>
            
                {objeto.nivel2.map(n2 => {
                    if(typeof n2 === 'string')
                        return (<Text>{n2}{"\n"}</Text>)
                    else{
                        {n2.nivel3.map(n3 => {
                            return(<Text>{n3}{"\n"}</Text>)
                        })}
                    }                        
                })}
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
      fontSize: 23,
      textAlign: 'center',
      marginVertical: 20,
    },
    subtitle: {
        fontSize: 20,
        marginLeft: 10,
      },
    subsubtitle: {
        fontSize: 18,
        marginLeft: 20,
      },
    text: {
        fontSize: 16,
        marginLeft: 25,
        marginTop: 10
      },
  });

  export default BodyUrgenciasData;