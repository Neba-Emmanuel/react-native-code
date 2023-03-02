import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => navigation.navigate('Components')} style={styles.buttonStyle}>
            <Text style={{color:'#fff'}}>Go to component demo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('fList')} style={styles.buttonStyle}>
            <Text style={{color:'#fff'}}>Go to List demo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Image')} style={styles.buttonStyle}>
            <Text style={{color:'#fff'}}>Go to Image demo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Counter')} style={styles.buttonStyle}>
            <Text style={{color:'#fff'}}>Go to Counter demo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Color')} style={styles.buttonStyle}>
            <Text style={{color:'#fff'}}>Go to Color demo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Square')} style={styles.buttonStyle}>
            <Text style={{color:'#fff'}}>Go to Square demo</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 3,
    alignItems: 'center'
  },

  text: {
    fontSize: 30,
  },

  buttonStyle:{
    width: 200,
    height: 50,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 20
  }
});

export default HomeScreen;