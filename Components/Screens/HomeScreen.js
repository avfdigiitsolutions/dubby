import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Post from '../Container/HomeScreenContainer/Post'
import Dashboard from '../Container/HomeScreenContainer/Trending'
import Popular from '../Container/HomeScreenContainer/Popular';

const listTab = [
  {
    status: 'VIRALS'
  },
  {
    status: 'For You'
  }
]

const HomeScreen = ({ navigation }) => {
  const [active, setActive] = useState('VIRALS')
  const [status, setStatus] = useState(true)
  const setStatusFilter = (status) => {
    setActive(status)
    if (status === "VIRALS") {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style='dark' />
      <View style={styles.topbar} >
        {
          listTab.map((d, key) => (
            <TouchableOpacity key={key} style={[styles.btnTab, active === d.status && styles.btnTabActive]} onPress={() => setStatusFilter(d.status)}>
              <Text style={styles.textTab} >{d.status}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      {
        status ? <Dashboard navigation={navigation} /> : <Popular navigation={navigation} />

      }

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#383838'
  },
  topbar: {
    flexDirection: 'row',
    // alignSelf: 'center',
    margin: 10
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
    margin: 5,
    borderRadius: 20
  },
  textTab: {
    fontSize: 16,
    color: '#fff'
  },
  btnTabActive: {
    backgroundColor: '#E6838D'
  }
})