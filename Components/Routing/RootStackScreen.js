import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Language from '../Screens/Language';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LoginPage from '../Screens/LoginPage';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='Language' component={Language}
                options={() => ({
                    title: 'Select Language',
                    headerTitleStyle: { color: '#fff' },
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#004f98',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View>
                            <FontAwesome.Button
                                name='arrow-left'
                                size={25}
                                backgroundColor='#004f98'
                                color='#fff'
                                onPress={() => navigation.goBack()}
                            />
                        </View>
                    )
                })}
            />
            <RootStack.Screen name='LoginPage' component={LoginPage}
                options={() => ({
                    title: 'Welcome',
                    headerTitleStyle: { color: '#fff' },
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#004f98',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View></View>
                    )
                })}
            />
        </RootStack.Navigator>
    )
}

export default RootStackScreen