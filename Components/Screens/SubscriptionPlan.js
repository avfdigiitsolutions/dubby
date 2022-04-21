import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PricingCard } from 'react-native-elements'

const SubscriptionPlan = () => {
    return (
        <SafeAreaView >
            <ImageBackground source={require('../../assets/images/bgImages/bg5.jpg')}
                style={{
                    width: '100%', // applied to Image
                    height: '100%'
                }}
            >
                <ScrollView>
                    <View>
                        <PricingCard
                            containerStyle={{ backgroundColor: '#BDB76B', borderRadius: 20 }}
                            color="red"
                            title="Bronze"
                            price="₹ 399"
                            info={['Basic Plan']}
                            button={{ title: 'Subscribe' }}
                        />
                        <PricingCard
                            containerStyle={{ backgroundColor: '#8FBC8F', borderRadius: 20 }}
                            color="orange"
                            title="Silver"
                            price="₹ 699"
                            info={['Limited Plan']}
                            button={{ title: 'Subscribe' }}
                        />
                        <PricingCard
                            containerStyle={{ backgroundColor: '#00CED1', borderRadius: 20 }}
                            color="purple"
                            title="Gold"
                            price="₹ 999"
                            info={['Premium Plan']}
                            button={{ title: 'Subscribe' }}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SubscriptionPlan

const styles = StyleSheet.create({

})