import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.txtStyle1}/>
            <View style={styles.txtStyle2}/>
            <View style={styles.txtStyle3}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        // alignItems: 'flex-start',
    },
    txtStyle1: {
        height: 40,
        width: 40,
        borderWidth: 3,
        borderColor: 'yellow',
        backgroundColor: 'red',
        // alignSelf: 'stretch'
    },
    txtStyle2: {
        height: 40,
        width: 40,
        borderWidth: 3,
        borderColor: 'yellow',
        backgroundColor: 'green',
        marginTop: 40
    },
    txtStyle3: {
        height: 40,
        width: 40,
        borderWidth: 3,
        borderColor: 'yellow',
        backgroundColor: 'purple',
    },
});

export default BoxScreen;