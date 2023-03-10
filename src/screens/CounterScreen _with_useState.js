import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const CounterScreen = () => {
const [counter, setCounter] = useState(0);

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity 
            onPress={() => {
                setCounter(counter + 1);
            }}
            style={styles.buttonStyle}
            >
                <Text>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => {
                setCounter(counter - 1);
            }}
            style={styles.buttonStyle}>
                <Text>Decrease</Text>
            </TouchableOpacity>
            <Text>Current Count: {counter}</Text>
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

export default CounterScreen;