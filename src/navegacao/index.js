// import React from 'react'
// import { SafeAreaView, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import Stack from './Stack'
// export default props => (
//      <SafeAreaView style={{flex:1}}>
//             <NavigationContainer>
//                 <Stack/>
//             </NavigationContainer>
//     </SafeAreaView>
// )
import React, { Component } from 'react';
import { StyleSheet,  SafeAreaView, Text , Button,  TextInput } from 'react-native';
import { withFormik } from 'formik';


class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Wi-Fi do Embarcado</Text>
        <TextInput
          style={styles.formInput}
          type
          onChangeText={ssid => this.props.setFieldValue('ssid', ssid)}
          placeholder='SSID do Wi-FI'
        />
        <Text style={styles.validationText}>{this.props.errors.ssid}</Text>
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          onChangeText={password => this.props.setFieldValue('password', password)}
          placeholder='Senha'
        />
        <Text style={styles.validationText}>{this.props.errors.password}</Text>
        <Button onPress={() => {this.props.handleSubmit()}} title="Salvar"/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validationText: {
    marginTop: 0,
    marginBottom: 20,
    color: 'red'
  },
  titleText: {
      fontSize: 32,
      marginBottom:32 
  },
  formInput: {
    width: 300,
    height: 50,
    borderColor: '#B5B4BC',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8
  }
});

export default withFormik({
  mapPropsToValues: () => ({ ssid: '', password: '' }),
  validate: (values, props) => {
    const errors = {};
    if(!values.ssid){
        errors.ssid = 'Informe o nome do Wi-Fi';
    }
    if(!values.password){
        errors.password = 'Informe a senha do Wi-Fi';
    }

    return errors;
  },
  handleSubmit: (values, {props}) => {
      console.warn(values)
  }
})(App);