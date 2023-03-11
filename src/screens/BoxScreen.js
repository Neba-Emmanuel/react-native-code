import React from "react";
import  { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textOneStyle}>Box Screen 1</Text>
            <Text style={styles.textTwoStyle}>Box Screen 2</Text>
            <Text style={styles.textThreeStyle}>Box Screen 3</Text> */}
            <View style={styles.boxOneStyle}/>
            <View style={styles.boxTwoStyle}/>
            <View style={styles.boxThreeStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection: 'row',
        // alignItems: 'flex-start',
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'space-between',
        height: 200,
    },
    boxOneStyle:{
        width: 50,
        height: 50,
        borderWidth: 3,
        backgroundColor: 'red',
        borderColor: 'red',
        // flex: 4,
    },
    boxTwoStyle:{
        width: 50,
        height: 50,
        borderWidth: 3,
        backgroundColor: 'blue',
        borderColor: 'blue',
        top: 50,
        // flex: 4,
        // alignSelf:"center",
        // ...StyleSheet.absoluteFillObject,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
    },
    boxThreeStyle:{
        width: 50,
        height: 50,
        borderWidth: 3,
        backgroundColor: 'green',
        borderColor: 'green',
        // flex: 4,
    },
})

export default BoxScreen;