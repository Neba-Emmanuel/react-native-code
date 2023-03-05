import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Button} from 'react-native';

const ColorCounter = ({color, amount, onIncrease, onDecrease}) => {
    return (
        <View>          
            <Text>{color}: {amount}</Text>
            <Button onPress={() => { onIncrease() }} title={`Increase ${color}`} />
            <Button onPress={() => { onDecrease() }} title={`Decrease ${color}`} />

            {/* <TouchableOpacity style={styles.buttonStyle}>
                <Text>Increase {color}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text>Decrease {color}</Text>
            </TouchableOpacity> */}
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

export default ColorCounter;