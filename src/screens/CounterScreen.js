import React, {useReducer} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    switch(action.type){
        case('increment'):
            return state + action.payload;
        case('decrement'):
            return state - action.payload;
        default:
            return state;
    }
}

const CounterScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, 0);

    return(
        <View>
            <Button 
                title="Increase"
                onPress={() => dispatch({
                    type: 'increment',
                    payload: 1
                })}/>
            <Button 
                title="Decrease"
                onPress={() => dispatch({
                    type: 'decrement',
                    payload: 1
                })}/>
            <Text style={styles.fontStyl}>Current Count:</Text>
            <Text style={styles.counterStyl}>{state}</Text>
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