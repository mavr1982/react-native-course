import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = 'Miguel Angel'
    return (
        <View>
            <Text style={styles.titleStyle}>This is the components screen.</Text>
            <Text style={styles.subtitleStyle}>Mi nombre es {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 40,
  },
  subtitleStyle: {
      fontSize: 10,
    },
});

export default ComponentsScreen;