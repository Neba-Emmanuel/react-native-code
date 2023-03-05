import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity 
            onPress={() => {
                setColors([...colors, randomRGB()])
            }}
            style={styles.buttonStyle}
            >
                <Text>Add Color</Text>
            </TouchableOpacity>

            <FlatList
            keyExtractor={item => item}
            data={colors}
            renderItem={({item}) => {
                return <View style={{ width: 100, height: 100, backgroundColor: item }} />
            }}
            />
        </View>
    );
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
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

export default ColorScreen;