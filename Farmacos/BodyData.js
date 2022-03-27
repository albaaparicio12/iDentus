import React from 'react';
import { StyleSheet, ScrollView,View } from 'react-native';
import {Card, Text} from 'react-native-elements';

class BodyData extends React.Component{
    render(){
        let objeto = this.props.data
            return(
                <ScrollView>
                    <Card>
                        <Text style= {styles.title}>
                            {objeto.titulo}
                        </Text>
                        <Text style={styles.subtitle}>
                            Posología:{"\n"}
                            <Text style={styles.subsubtitle}>
                            -Adultos:{"\n"}
                            </Text>
                            {objeto.posologia.adultos.map(function(adulto){
                                return(
                                    <View>
                                        <Text style={styles.text}>
                                        {adulto + "\n"}
                                        </Text>
                                    </View>
                                    )
                            })}
                            {"\n"}
                            <Text style={styles.subsubtitle}>
                            -Niños:{"\n"}
                            </Text>
                            {objeto.posologia.ninos.map(function(nino){
                                return(
                                    <View>
                                        <Text style={styles.text}>
                                        {nino + "\n"}
                                        </Text>
                                    </View>
                                    )
                            })}
                        </Text>
                        <Text style={styles.subtitle}>
                            Efectos Secundarios: {"\n"}
                            {objeto.efectossecundarios.map(function(efecto){
                                return(
                                    <View>
                                        <Text style={styles.text}>
                                        {efecto + "\n"}
                                        </Text>
                                    </View>
                                    )
                            })}
                            {"\n"}Embarazo y lactancia: <Text style={styles.text}>{objeto.embarazo}</Text> {"\n"}
                        </Text>
                        <Text style={styles.subtitle}>
                            Presentaciones comerciales: {"\n"}
                            {objeto.presentacionescomerciales.map(function(pres){
                                return(
                                    <View>
                                        <Text style={styles.subsubtitle}>
                                        {pres.titulo}{"\n"}
                                            {pres.pres.map(function(presConcreto){
                                                return(
                                                    <View>
                                                        <Text style={styles.text}>
                                                        {presConcreto}{"\n"}
                                                        </Text>
                                                    </View>
                                                    )
                                            })}
                                        </Text>
                                    </View>
                                    )
                            })}

                        {"\n"}Notas: {"\n"}
                        <Text style={styles.text}>{objeto.nota}</Text>{"\n"}
                        </Text>
                    </Card>
                </ScrollView>
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

  export default BodyData;