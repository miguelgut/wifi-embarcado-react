import React from 'react';
import TextoCentral from '../components/TextoCentral';
import { SafeAreaView, StyleSheet, Button, TextInput, View,Text } from 'react-native';

export default props => {
        console.warn(props.route.params)
        return (
        <TextoCentral corFundo="#3b82c4">Tela B</TextoCentral>
        )
}