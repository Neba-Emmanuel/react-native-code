import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title="Go to component demo" 
      style={styles.buttonStyle}/>

      <TouchableOpacity onPress={() => navigation.navigate('fList')}>
        <Text>Go to List demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },

  buttonStyle:{
    width: 50,
    height: 100,
    marginTop: 20
  }
});

export default HomeScreen;