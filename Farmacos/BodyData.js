import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Card, Text} from 'react-native-elements';

class BodyData extends React.Component{
    render(){
        let objeto = this.props.data
            return(
                <View>
                    <Card>
                        <Text style= {styles.title}>
                            {objeto.titulo}
                        </Text>
                        <Text>
                            Posología:{"\n"}
                            -Adultos:{"\n"}
                            {objeto.posologia.adultos.map(function(adulto){
                                return(
                                    <View>
                                        <Text>
                                            {adulto + "\n"}
                                        </Text>
                                    </View>
                                    )
                            })}
                            {objeto.posologia.ninos.map(function(nino){
                                return(
                                    <View>
                                        <Text>
                                            {nino + "\n"}
                                        </Text>
                                    </View>
                                    )
                            })}
                        </Text>
                        <Text>
                            Efectos Secundarios: {"\n"}
                            {objeto.efectossecundarios.map(function(efecto){
                                return(
                                    <View>
                                        <Text>
                                            {efecto + "\n"}
                                        </Text>
                                    </View>
                                    )
                            })}
                            Embarazo y lactancia: {objeto.embarazo} {"\n"}
                        </Text>
                        <Text>
                            Presentaciones comerciales: {"\n"}
                            {objeto.presentacionescomerciales.map(function(pres){
                                return(
                                    <View>
                                        <Text>
                                            {pres.titulo}{"\n"}
                                            {pres.pres.map(function(presConcreto){
                                                return(
                                                    <View>
                                                        <Text>
                                                            {presConcreto}{"\n"}
                                                        </Text>
                                                    </View>
                                                    )
                                            })}
                                        </Text>
                                    </View>
                                    )
                            })}

                            Notas: {"\n"}
                            {objeto.nota}{"\n"}
                        </Text>
                    </Card>
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
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 20,
    },
  });

  export default BodyData;