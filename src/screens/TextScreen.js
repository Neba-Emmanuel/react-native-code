import React,{useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                value={password}
                onChangeText={ (newValue) => setPassword(newValue)}
            />
            {(password.length <= 5) ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default TextScreen;