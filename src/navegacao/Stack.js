import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';

import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => (
    
    // <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
    //     <Stack.Screen name="TelaA" options={{title: 'Home'}}>
    //         {props => (
    //             <PassoStack {...props} avancar="BasicForm">
    //                 <BasicForm {...props}/>
    //             </PassoStack>
    //         )}
    //     </Stack.Screen>
    //     <Stack.Screen {...props} name="BasicForm" options={{title: 'Home'}}>
    //         {props => (<BasicForm {...props}></BasicForm>)}
    //     </Stack.Screen>
    // </Stack.Navigator>
    
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
        <Stack.Screen name="TelaA" options={{title: 'Home'}}>
            {props => (
                <PassoStack {...props} avancar="TelaA">
                    <TelaA></TelaA>
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)