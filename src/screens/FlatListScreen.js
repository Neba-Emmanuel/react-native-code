import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

const FlatListScreen = () => {
    const friends = [
        {
            name: 'Friend 1',
            age: 20
        },
        {
            name: 'Friend 2',
            age: 21
        },
        {
            name: 'Friend 3',
            age: 22
        },
        {
            name: 'Friend 4',
            age: 23
        },
        {
            name: 'Friend 5',
            age: 24
        },
        {
            name: 'Friend 6',
            age: 25
        },
        {
            name: 'Friend 7',
            age: 26
        }
    ];
    return (<FlatList
    keyExtractor={friend => friend.name}
        data = {friends}
        renderItem = {({item}) =>{
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }
        }
        />
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        marginVertical: 50,
        marginHorizontal: 20
    }
})

export default FlatListScreen;