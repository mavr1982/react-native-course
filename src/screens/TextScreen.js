import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('')
    return (
     <View>
        <Text>Text screen</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Type your name here"
            onChangeText={newValue => setName(newValue)}
        />
        <Text>My name is {name}</Text>
        {name.length < 3 ? <Text>Min length is 3</Text> : null}
     </View>
     );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;