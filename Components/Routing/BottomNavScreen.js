import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import Message from '../Screens/Message';
import Notification from '../Screens/Notification';
import PlayerScreen from '../Screens/PlayerScreen';
import Post from '../Container/HomeScreenContainer/Post';

const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const CartStack = createStackNavigator();
const OrderStack = createStackNavigator();
const PostStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const { width } = Dimensions.get('screen');
const width_logo = width / 5;

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity style={{
        top: -30,
        justifyContent: 'center',
        alignContent: 'center',
        ...styles.shadow
    }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#383838',
            borderColor: '#fff',
            borderWidth: 0.4,
        }} >
            {children}
        </View>
    </TouchableOpacity>
)

const BottomNavScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            showLable: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#383838',
                borderRadius: 20,
                bottom: 20,
                marginHorizontal: 20,
                height: 80,
                shadowColor: '#000',
                shadowOpacity: 0.06,
                shadowOffset: {
                    width: 10,
                    height: 10
                },
                borderTopColor: '#383838'
            }
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: " ",
                tabBarColor: '#004f98',
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }} >
                        <Image
                            source={require('../../assets/images/home/icon/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#748c94' : '#fff',
                            }}
                        />
                    </View>
                )
            }}
        />
        <Tab.Screen
            name="Email"
            component={OrderStackScreen}
            options={{
                tabBarLabel: " ",
                tabBarColor: '#004f98',
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }} >
                        <Image
                            source={require('../../assets/images/home/icon/email.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#748c94' : '#fff',
                            }}
                        />
                    </View>
                )
            }}
        />
        <Tab.Screen
            name="Cart"
            component={CartStackScreen}
            options={{
                tabBarLabel: " ",
                tabBarColor: '#004f98',
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../assets/images/home/icon/plus.png')}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? '#748c94' : '#fff',
                            top: 6
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}
        />
        <Tab.Screen
            name="Notification"
            component={CategoryStackScreen}
            options={{
                tabBarLabel: " ",
                tabBarColor: '#004f98',
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }} >
                        <Image
                            source={require('../../assets/images/home/icon/bell.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#748c94' : '#fff',
                            }}
                        />
                    </View>
                )
            }}
        />
        <Tab.Screen
            name="Post"
            component={PostStackScreen}
            options={{
                tabBarLabel: " ",
                tabBarColor: '#004f98',
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }} >
                        <Image
                            source={require('../../assets/images/home/icon/youtube.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#748c94' : '#fff',
                            }}
                        />
                    </View>
                )
            }}
        />
    </Tab.Navigator>
)

export default BottomNavScreen

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#383838'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <HomeStack.Screen name="HomeOne" component={HomeScreen}
            options={{ headerShown: false }}
        // options={{
        //     title: "",
        //     headerLeft: () => (
        //         <Icon.Button name='ios-menu' size={25}
        //             backgroundColor='#383838'
        //             onPress={() => navigation.openDrawer()}
        //         />
        //     ),
        //     headerRight: () => (
        //         <Icon.Button name='notifications-outline' size={25}
        //             backgroundColor='#383838'
        //             onPress={() => navigation.navigate("Notification")}
        //         />
        //     )
        // }}
        />
    </HomeStack.Navigator>
)

const CategoryStackScreen = ({ navigation }) => (
    <CategoryStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#004f98'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <CategoryStack.Screen name="MessageScreen" component={Message}
            options={{
                title: "",
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                        backgroundColor='#004f98'
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: () => (
                    <Icon.Button name='notifications-outline' size={25}
                        backgroundColor='#004f98'
                        onPress={() => navigation.navigate("Notification")}
                    />
                )
            }}
        />
    </CategoryStack.Navigator>
)

const CartStackScreen = ({ navigation }) => (
    <CartStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#004f98'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <CartStack.Screen name="CartHome" component={Notification}
            options={{
                title: "",
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                        backgroundColor='#004f98'
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: () => (
                    <Icon.Button name='notifications-outline' size={25}
                        backgroundColor='#004f98'
                        onPress={() => navigation.navigate("Notification")}
                    />
                )
            }}
        />
    </CartStack.Navigator>
)

const OrderStackScreen = ({ navigation }) => (
    <OrderStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#004f98'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <OrderStack.Screen name="NotificationScreen" component={Notification}
            options={{
                title: "",
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25}
                        backgroundColor='#004f98'
                        onPress={() => navigation.openDrawer()}
                    />
                ),
                headerRight: () => (
                    <Icon.Button name='notifications-outline' size={25}
                        backgroundColor='#004f98'
                        onPress={() => navigation.navigate("Notification")}
                    />
                )
            }}
        />
    </OrderStack.Navigator>
)

const PostStackScreen = ({ navigation }) => (
    <PostStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#004f98'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <PostStack.Screen name="PostScreen" component={Post}
            options={{ headerShown: false }}
        // options={{
        //     title: '',
        //     headerTitleStyle: { textAlign: 'center', marginLeft: width_logo, fontWeight: 'bold' },
        //     headerLeft: () => (
        //         <Icon.Button name='arrow-back-circle-outline' size={35}
        //             backgroundColor='#004f98'
        //             onPress={() => navigation.goBack()}
        //         />
        //     ),
        //     headerRight: () => (
        //         <Icon.Button name='create-outline' size={25}
        //             backgroundColor='#004f98'
        //             onPress={() => navigation.goBack()}
        //         />
        //     )
        // }}
        />
    </PostStack.Navigator>
)
