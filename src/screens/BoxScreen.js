import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const BoxScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
     <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
     </View>
     );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200
    },
    textOneStyle: {
        borderWidth: 2,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 2,
        borderColor: 'green',
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 2,
        borderColor: 'blue',
    }
});

export default BoxScreen;