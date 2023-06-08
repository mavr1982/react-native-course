import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25;
const MAX_COLOR_VALUE = 255;
const MIN_COLOR_VALUE = 0;

const setColor = (color, setter, increment) => {
    const testColor = color;
    if (increment > 0 && ((testColor + increment) >= MAX_COLOR_VALUE )) {
        setter(MAX_COLOR_VALUE)
        return;
    };
    if (increment < 0 && ((testColor + increment) <= MIN_COLOR_VALUE )) {
        setter(MIN_COLOR_VALUE)
        return;
    };
    setter(color + increment);
};

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter
                color="Red"
                onIncrease={() => {setColor(red, setRed, COLOR_INCREMENT)}}
                onDecrease={() => {setColor(red, setRed, -1 * COLOR_INCREMENT)}}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => {setColor(green, setGreen, COLOR_INCREMENT)}}
                onDecrease={() => {setColor(green, setGreen, -1 * COLOR_INCREMENT)}}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => {setColor(blue, setBlue, COLOR_INCREMENT)}}
                onDecrease={() => {setColor(blue, setBlue, -1 * COLOR_INCREMENT)}}
            />
            <View
                style={{ margin: 10, height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            ></View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;