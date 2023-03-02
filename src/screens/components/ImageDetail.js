import React from "react";
import {Text, Image, View, StyleSheet} from "react-native";

const ImageDetail= (props) => {
    return(
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>image score - {props.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageDetail;