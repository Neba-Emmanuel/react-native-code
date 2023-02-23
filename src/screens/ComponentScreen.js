import React from "react";
import {Text, StyleSheet, View} from 'react-native'

const ComponentScreen = function(){
    const name = 'Emmanuel'
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.submenuStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 40,
    },
    submenuStyle:{
        fontSize: 20,
    },
})

export default ComponentScreen;