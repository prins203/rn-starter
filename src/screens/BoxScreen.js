import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.txtStyle}>One</Text>
            <Text style={styles.txtStyle}>two</Text>
            <Text style={styles.txtStyle}>Three</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        flexDirection: 'row', 
        alignItems: 'center',
    },
    txtStyle: {
        borderWidth: 3,
        borderColor: 'red',
        padding: 10,
        backgroundColor: 'yellow',
    }
});

export default BoxScreen;