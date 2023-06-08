import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const reducer = (state, action) => {
   return { ...state, value: state.value + action.payload };
};

const CounterScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 })
    return (
     <View>
        <Button title="Increase" onPress={() => { dispatch({ type: 'change_value', payload: 1 }) }} />
        <Button title="Decrease" onPress={() => { dispatch({ type: 'change_value', payload: -1 }) }} />
        <Text>Current Count: {state.value}</Text>
     </View>
     );
};

const styles = StyleSheet.create({});

export default CounterScreenReducer;