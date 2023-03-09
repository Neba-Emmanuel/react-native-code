import React, {useReducer} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state
            : { ...state, red: state.red + action.amount};
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : { ...state, green: state.green + action.amount};
        case 'blue':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state
            : { ...state, green: state.green + action.amount};
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return (
        <View style={{marginHorizontal: 20}}>          
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color='Red'
                amount={red}
            />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color='Green'
                amount={green}
            />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color='Blue'
                amount={blue}
            />
            <View style={{width: 100, height: 100, marginTop: 10, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
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