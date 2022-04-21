import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../../Utils/Dimensions'

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.buttonContainer, styles.shadowBtn, {shadowColor: '#00acee'}]} {...rest} >
        <Text style={styles.buttonText}> {buttonTitle} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormButton

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '60%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowBtn:{
    shadowOffset: {width:1, height:10},
    shadowOpacity:0.4,
    shadowRadius:3,
    elevation:15
  }
})