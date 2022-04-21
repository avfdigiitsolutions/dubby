import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoginForm from '../Container/LoginForm/LoginForm'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const LoginPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/images/bgImages/bg3.jpg')}
                style={{
                    flex: 1,
                    width: '100%', // applied to Image
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginTop: 20, justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.head_text} > Powerful, Easy-to-use, Video maker and Editing tool </Text>
                    </View>
                    <View>
                        <LoginForm navigation={navigation} />
                    </View>
                    <View>
                        <View style={{ flex: 1, marginTop: 30 }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: 'bold' }} > Or Login With</Text>
                        </View>
                        <View style={styles.btn_container}>
                            <TouchableOpacity style={[styles.buttonContainer, styles.shadowBtn, { backgroundColor: '#4267b2', shadowColor: '#4267b2' }]}>
                                <FontAwesome style={styles.icon} name='facebook' size={30} color='#fff' />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonContainer, styles.shadowBtn, { backgroundColor: '#db4a39', shadowColor: '#4267b2' }]}>
                                <FontAwesome style={styles.icon} name='google' size={30} color='#fff' />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonContainer, styles.shadowBtn, { backgroundColor: '#d6249f', shadowColor: '#4267b2' }]}>
                                <FontAwesome style={styles.icon} name='instagram' size={30} color='#fff' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop: 20, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}> Don't have an account?{" "}
                            <Text style={{color: '#DC143C', fontWeight: 'bold'}}> Register Now </Text>
                        </Text>
                    </View>
                    <View style={{marginTop: 20, justifyContent:'center', alignItems:'center'}} >
                        <Text style={styles.terms_text}> By Signing-up means that you are agree to our Term of Services and Privacy Policy </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head_text: {
        fontSize: 26,
        fontWeight: "700",
        letterSpacing: 1,
        textAlign: "center",
        color: '#000',
        marginBottom: 20,
        marginTop: 20,
        width: 300
    },
    terms_text: {
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 1,
        textAlign: "center",
        color: '#fff',
        marginTop: 30,
        width: 300
    },
    btn_container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        // marginTop:10
    },
    buttonContainer: {
        // marginTop: 20,
        width: "20%",
        // height: windowHeight / 13,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
})