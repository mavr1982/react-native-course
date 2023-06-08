import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const reducer = (state, action) => {
    switch(action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
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
                onIncrease={() => { dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}}
                onDecrease={() => { dispatch({ colorToChange: 'red', amount: (-1 * COLOR_INCREMENT) })}}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => { dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}}
                onDecrease={() => { dispatch({ colorToChange: 'green', amount: (-1 * COLOR_INCREMENT) })}}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => { dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}}
                onDecrease={() => { dispatch({ colorToChange: 'blue', amount: (-1 * COLOR_INCREMENT) })}}
            />
            <View
                style={{ margin: 10, height:150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}
            ></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareReducerScreen;