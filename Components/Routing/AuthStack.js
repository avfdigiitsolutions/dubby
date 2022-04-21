import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscriptionPlan from '../Screens/SubscriptionPlan';
import RootStackScreen from './RootStackScreen';
import { useDispatch, useSelector } from 'react-redux';
import { logout, signIn } from '../Redux/Actions/UserActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../Screens/HomeScreen';
import BottomNavScreen from './BottomNavScreen';
import Post from '../Container/HomeScreenContainer/Post';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const MainStack = createNativeStackNavigator();

const AuthStack = () => {
    const dispatch = useDispatch();
    const userInfoList = useSelector((state) => state.userSignIn);
    const { userInfoData } = userInfoList;
    const [token, setToken] = useState(null)

    async function _getStorageValue() {
        var value = await AsyncStorage.getItem('userInfo')
        setToken(value)
        return value
    }

    useEffect(() => {
        _getStorageValue()

    }, [dispatch(signIn, logout)])


    return (
        <NavigationContainer>
            {
                token === null
                    ?
                    <RootStackScreen />
                    :
                    <MainStack.Navigator>
                        <MainStack.Screen name='HomeDrawerOne' component={BottomNavScreen} options={{ headerShown: false }} />
                        <MainStack.Screen name='Subscription' component={SubscriptionPlan}
                            options={({ navigation }) => ({
                                title: 'Subscription Plan',
                                headerTitleStyle: { color: '#fff' },
                                headerTitleAlign: 'center',
                                headerStyle: {
                                    backgroundColor: '#383838',
                                    elevation: 0,
                                },
                                headerRight: () => (
                                    <View>
                                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                            <Text style={{ fontSize: 16, color: "#fff", fontWeight: 'bold' }} >Skip</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        />
                        <MainStack.Screen name='Home' component={HomeScreen}
                            options={() => ({
                                title: 'Dashboard',
                                headerTitleAlign: 'center',
                                headerTitleStyle: { color: '#fff' },
                                headerStyle: {
                                    backgroundColor: '#383838',
                                    elevation: 0,
                                },
                                headerLeft: () => (
                                    <View></View>
                                )
                            })}
                        />
                    </MainStack.Navigator>
            }
        </NavigationContainer>
    )
}

export default AuthStack