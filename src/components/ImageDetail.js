import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
    return (
    <View>
        <Image source={props.imageSource} />
        <Text>Image score: {props.score}</Text>
        <Text>Image Detail Screen for {props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;