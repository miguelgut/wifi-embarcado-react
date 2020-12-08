import React from 'react';
import { StyleSheet, Button, TextInput, View,Text } from 'react-native';


export default props => (
    <View style={{
            flex:1,
            // justifyContent: "center",
            // alignItems: "center",
            // backgroundColor: props.corFundo || '#000'
            }}>
            <View>
                {props.avancar 
                    ? <Button 
                        title="Avançar"
                        onPress={() => {
                            props.navigation.push(props.avancar,{numero: 1})
                        }
                    } />
                    : false
                }
            </View>
            <View style={{flex:1}}>
                {props.children}
            </View>
        {/* <Text style={{fontSize:50, color: props.corText || '#FFF'}}>
            {props.children}
        </Text> */}
    </View>
)