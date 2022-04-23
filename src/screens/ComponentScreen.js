import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
    const my_name = "Prins";
    
    return(
        <View>
            <Text style={styles.textStyles}>Getting started with react native</Text>
            <Text style={styles.nameStyle}>My Name is {my_name}</Text>
        </View>
    ); 
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 45,
    },
    nameStyle: {
        fontSize: 20,
    }
})

export default ComponentScreen;