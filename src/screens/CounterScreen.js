import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = (props) => {
    const [counter, setCounter] = useState(0);

    return(
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    setCounter(counter+1)
                }}/>
            <Button 
                title="Decrease"
                onPress={() => {
                    setCounter(counter-1) 
                }}/>
            <Text style={styles.fontStyl}>Current Count:</Text>
            <Text style={styles.counterStyl}>{counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    counterStyl: {
        fontSize: 29,
        alignSelf: 'center'
    },
    fontStyl: {
        fontSize: 19,
        alignSelf: 'center'
    }
});

export default CounterScreen;