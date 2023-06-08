import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const reducer = (state, action) => {
    const color = action.payload.color;
    let newValue = action.payload.value;
    if (newValue > 0) {
        newValue = ((state[color] + newValue) >= MAX_COLOR_VALUE ) ? MAX_COLOR_VALUE : state[color] + newValue;
    } else {
        newValue = ((state[color] + action.amount) <= MIN_COLOR_VALUE ) ? MIN_COLOR_VALUE : state[color] + newValue;
    }
    switch(color) {
        case 'red':
            return { ...state, red: newValue };
        case 'green':
            return { ...state, green: newValue };
        case 'blue':
            return { ...state, blue: newValue };
        default:
            return state;
    }
};

const SquareReducerScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter
                color="Red"
                onIncrease={() => { dispatch({ type: 'change_color_value', payload: { color: 'red', value: COLOR_INCREMENT } })}}
                onDecrease={() => { dispatch({ type: 'change_color_value', payload: { color: 'red', value: (-1 * COLOR_INCREMENT) } })}}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => { dispatch({ type: 'change_color_value', payload: { color: 'green', value: COLOR_INCREMENT } })}}
                onDecrease={() => { dispatch({ type: 'change_color_value', payload: { color: 'green', value: (-1 * COLOR_INCREMENT) } })}}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => { dispatch({ type: 'change_color_value', payload: { color: 'blue', value: COLOR_INCREMENT } })}}
                onDecrease={() => { dispatch({ type: 'change_color_value', payload: { color: 'blue', value: (-1 * COLOR_INCREMENT) } })}}
            />
            <View
                style={{ margin: 10, height:150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}
            ></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareReducerScreen;