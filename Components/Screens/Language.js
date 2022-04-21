import { Dimensions, StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import lanData from "../Utils/Data/Pages/Language.json"

const Language = ({ navigation }) => {

    const handleClick = () =>{
        navigation.navigate("LoginPage")
    }

    return (
        <SafeAreaView style={styles.container} >
            <ImageBackground source={require('../../assets/images/bgImages/bg1.jpg')}
                style={{
                    width: '100%', // applied to Image
                    height: '100%'
                }}
            >
                <View style={styles.containerOne} >
                    {
                        lanData.map((d, key) => {
                            return (
                                <View key={key}>
                                    <TouchableOpacity onPress={handleClick} style={[styles.card, {backgroundColor: d.bgColor}] } >
                                        <Text style={{color: '#fff', fontSize: 16}}> {d.title} </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Language

const { height } = Dimensions.get('screen');
const { width } = Dimensions.get('screen');
const height_logo = height * 0.18;
const height_logo1 = height * -0.16;
const width_logo = width * 0.68;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        borderColor: 'rgba(207, 206, 206, 0.938)',
        borderWidth: 0.5,
        width: 200,
        height: 200,
        marginTop: 10
    },
    containerOne: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
    // header: {
    //     flex: 2,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // footer: {
    //     flex: 1.5,
    //     backgroundColor: '#fff',
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    //     paddingVertical: 50,
    //     paddingHorizontal: 20,
    //     marginBottom: height_logo1
    // },
    // logo: {
    //     width: width_logo,
    //     height: height_logo
    // },
    // title: {
    //     color: '#05375a',
    //     fontSize: 26,
    //     fontWeight: 'bold',
    //     letterSpacing: 0.5
    // },
    // text: {
    //     color: 'grey',
    //     marginTop: 5
    // },
    // button: {
    //     alignItems: 'flex-end',
    //     marginTop: 30
    // },
    // signIn: {
    //     marginTop: 10,
    //     width: '50%',
    //     height: 40,
    //     backgroundColor: 'green',
    //     padding: 10,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 20,
    //     flexDirection: 'row'
    // },
    // textSign: {
    //     color: 'white',
    //     fontWeight: 'bold'
    // }
})