import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const SquareScreen = () => {

    return (
        <View>          
            <Text>SquareScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        width: 200,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 20
    }
})

export default SquareScreen;