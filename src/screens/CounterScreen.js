import React, {useReducer} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

//Community Conversion of using Reducer
// a better name for action would be HowToChangeState
const reducer = (state, action) => {
    // state ==={ counter: number}
    // action ==={type: Increment || Decrement, payload: 1}
    switch(action.type){
        case 'increment':
            return {...state, counter: state.counter + action.payload};
        case 'decrement':
            return {...state, counter: state.counter - action.payload}
        default:
            return state;
    } 
}
const CounterScreen = () => {
    //a better name for dispatch will be CallMyReducer
const [state, dispatch] = useReducer(reducer, {counter: 0});

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity 
            onPress={() => dispatch({type: 'increment', payload: 1})}
            style={styles.buttonStyle}
            >
                <Text>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => dispatch({type: 'decrement', payload: -1})}
            style={styles.buttonStyle}>
                <Text>Decrease</Text>
            </TouchableOpacity>
            <Text>Current Count: {state.counter}</Text>
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