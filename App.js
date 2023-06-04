import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyContact from './screens/MyContact'
import CreateContact from './screens/CreateContact'
import Profile from './screens/Profile'
const Stack=createStackNavigator();
export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MyContact'>
                <Stack.Screen name='MyContact' component={MyContact}/>
                <Stack.Screen name='CreateContact' component={CreateContact}/>
                <Stack.Screen name='Profile' component={Profile}
                options={{
                    headerShown: false,
                  }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}