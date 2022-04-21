import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import data from '../../Utils/Data/Home/videos'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import profileIcon from "../../../assets/images/home/profile.png"
import { StatusBar } from 'expo-status-bar';

const Post = ({ navigation }) => {
    const [paused, setPaused] = useState(true);
    const video = React.useRef();

    useEffect(() => {
        setPaused(true)
    }, [navigation])

    useEffect(() => {
        const videoPause = navigation.addListener('blur', () => {
            // console.log('Leaving Screen')
            setPaused(false)
        })

        return videoPause;
    }, [navigation])

    const pauseVideo = () => {
        setPaused(!paused)
    }
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <TouchableWithoutFeedback onPress={pauseVideo}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: data.video_one,
                    }}
                    useNativeControls={false}
                    resizeMode="cover"
                    isLooping={true}
                    shouldPlay={paused}
                    isMuted={false}
                />
            </TouchableWithoutFeedback>
            <View style={styles.iconCotainer} >
                <View style={{ alignSelf: 'flex-end' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                        <Image style={styles.profileIcon} source={{ uri: 'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA.jpg' }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }} >
                        <FontAwesome style={styles.icon} name='heart' size={40} color='#fff' />
                        <Text style={{ color: '#fff', fontSize: 10 }} > 123k </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }} >
                        <FontAwesome style={styles.icon} name='commenting' size={40} color='#fff' />
                        <Text style={{ color: '#fff', fontSize: 10 }} > 100k </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }} >
                        <FontAwesome style={styles.icon} name='share' size={40} color='#fff' />
                        <Text style={{ color: '#fff', fontSize: 10 }} > 155 </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }} >
                        <FontAwesome style={styles.icon} name='download' size={40} color='#fff' />
                        <Text style={{ color: '#fff', fontSize: 10 }} > Download </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }} >
                    <View>
                        <Text style={styles.textContainer}> @pkyadavoo7 </Text>
                        <Text style={styles.textContainer}>  <FontAwesome style={styles.icon} name='music' size={15} color='#fff' /> Audio: Tere Naam </Text>
                        <Text style={styles.textContainer}> #EvergreenSong #LoveSongs </Text>
                        <Text style={styles.textContainer}> #Songs </Text>
                    </View>
                    <View>
                        <Image style={styles.profileIconOne} source={{ uri: 'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA.jpg' }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    iconCotainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: '30%',
        paddingHorizontal: '8%',
    },
    textContainer: {
        color: '#fff',
        fontSize: 16,
        letterSpacing: 0.8,
        // lineHeight: 10
    },
    icon: {
        lineHeight: 40,
        // paddingBottom: 20
    },
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    profileIconOne: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 0,
    }
})