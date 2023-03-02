import React from "react";
import {Text, Image, View, StyleSheet} from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="Forest" score="9" imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Beach" score="7" imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Mountain" score="4" imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;