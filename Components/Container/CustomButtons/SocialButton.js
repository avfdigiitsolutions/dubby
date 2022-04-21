import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { windowWidth, windowHeight } from '../../Utils/Dimensions'


const SocialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
    let bgColor = backgroundColor;
    return (
        <View style={styles.btn_container} >
            <TouchableOpacity style={[ styles.buttonContainer, styles.shadowBtn, { backgroundColor: bgColor, shadowColor: '#4267b2' }]}>
                <FontAwesome style={styles.icon} name={btnType} size={30} color={color} />
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: bgColor }]} {...rest} >
                <View style={styles.iconWrapper}>
                    <FontAwesome style={styles.icon} name={btnType} size={30} color={color} />
                </View>
            </TouchableOpacity>
            <View>
                <Text style={[styles.buttonText, { color: color }]}> {buttonTitle} </Text>
            </View> */}
        </View>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    buttonContainer: {
        // marginTop: 20,
         width:"20%",
        height: windowHeight / 13,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconWrapper: {
        width: 30,
        // justifyContent: 'center',
        // alignItems: 'center'
        flexDirection: 'row'
    },
    icon: {
        fontWeight: 'bold',
        // flexDirection: 'row'
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_container: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // marginTop: 20
    },
    shadowBtn:{
        shadowOffset: {width:1, height:10},
        shadowOpacity:0.4,
        shadowRadius:3,
        elevation:15
      }
})