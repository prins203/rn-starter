import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return(
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button 
                title={`More ${color}`} 
                style={styles.BtnStyle} 
                onPress={() => onIncrease()}/>
            <Button 
                title={`Less ${color}`} 
                style={styles.BtnStyle} 
                onPress={() => onDecrease()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        alignSelf: 'center',
        paddingTop: 40,
    },
});

export default ColorCounter;