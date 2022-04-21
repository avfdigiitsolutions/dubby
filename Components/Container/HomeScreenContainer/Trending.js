import { SafeAreaView, StyleSheet, TouchableOpacity, View, Dimensions, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import data from '../../Utils/Data/Home/HomeProdData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';

const Trending = ({ navigation }) => {

    const Card = ({ item }) => {
        return (
            <View >
                 <StatusBar style='dark' />
                <View style={styles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('PostScreen')} style={styles.imageContainer}>
                        <View style={styles.imageContainer_one}>
                            <ImageBackground source={item.image}
                                style={styles.image}
                            >
                                <View style={{ top: 5 }} >
                                    <View style={{ marginLeft: 5, marginRight: 5 }}>
                                        <MaterialCommunityIcons name="youtube" color='#fff' size={30} />
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item, index) => item.id + index.toString()}
                renderItem={({ item }) => (<Card item={item} navigation={navigation} />)}
                enableEmptySections={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />


            {/* <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }} >
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={{ width: '50%', flexDirection: "row", justifyContent: 'center' }}>
                                <Card item={item} />
                            </View>
                        );
                    })}
                </View>
                <View>
                </View>
            </ScrollView> */}
        </SafeAreaView>
    )
}

export default Trending

const windowWidth = Dimensions.get("window").width;
const SLIDE_WIDTH = Math.round(windowWidth / 2);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: SLIDE_WIDTH,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    imageContainer: {
        height: 200,
        alignItems: 'flex-start',
        // backgroundColor: '#F8F8FF',
        // borderRadius: 14
    },
    imageContainer_one: {
        height: 280,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F8F8FF',
        // borderRadius: 14,
    },
    image: {
        width: SLIDE_WIDTH,
        height: 196,
        borderRadius: 30,
        margin: 2,
    },
    card: {
        // backgroundColor: '#F8F8FF',

    },
})