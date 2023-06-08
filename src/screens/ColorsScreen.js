import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title='Add a new color'
                onPress={() => setColors([...colors, randomRgb()]) }
            />
            <Text>Colors:</Text>
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{ margin: 4, height:100, width: 100, backgroundColor: item }}
                        ></View>
                    );
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;