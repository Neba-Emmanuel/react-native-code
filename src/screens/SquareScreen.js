import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
const [red, setRed] = useState(0);
const [green, setGreen] = useState(0);
const [blue, setBlue] = useState(0);

const setColor = (color, change) => {
    // if(color === 'red'){
    //     if(red + change > 255 || red + change < 0){
    //         return;
    //     }
    //     else{
    //         setRed(red + change);
    //     }
    // }
    switch(color){
        case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
        case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;   
        case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return; 
    }
}

    return (
        <View style={{marginHorizontal: 20}}>          
            <ColorCounter 
                onIncrease={() => {setColor('red',COLOR_INCREMENT)}}
                onDecrease={() => {setColor('red',-1 * COLOR_INCREMENT)}}
                color='Red'
                amount={red}
            />
            <ColorCounter 
                onIncrease={() => {setGreen(green + COLOR_INCREMENT)}}
                onDecrease={() => {setGreen(green - COLOR_INCREMENT)}}
                color='Green'
                amount={green}
            />
            <ColorCounter 
                onIncrease={() => {setBlue(blue + COLOR_INCREMENT)}}
                onDecrease={() => {setBlue(blue - COLOR_INCREMENT)}}
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