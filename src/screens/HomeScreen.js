import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
        <Text style={styles.text}>This is my Homepage</Text>
        <Button
            title="Go to components demo"
            onPress={() => props.navigation.navigate('Components')}
        />
        <Button
            title="Go to list demo"
            onPress={() => props.navigation.navigate('List')}
        />
        <Button
            title="Go to image screen"
            onPress={() => props.navigation.navigate('Image')}
        />
        <Button
            title="Go to counter screen"
            onPress={() => props.navigation.navigate('Counter')}
        />
        <Button
            title="Go to colors screen"
            onPress={() => props.navigation.navigate('Colors')}
        />
        <Button
            title="Go to square screen"
            onPress={() => props.navigation.navigate('Square')}
        />
        <Button
            title="Go to square reducer screen"
            onPress={() => props.navigation.navigate('SquareReducer')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginBottom: 40
  },
});

export default HomeScreen;
