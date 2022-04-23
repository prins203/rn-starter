import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    //state = {red: num, green: num, blue: num} --> this is passed with declaration of the REDUCER
    //action = {type: str, payload: num} --> this is passed as a param of DISPATCH
    switch (action.type){
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : {...state, red: (state.red + action.payload)};
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : {...state, green: (state.green + action.payload)};
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : {...state, blue: (state.blue + action.payload)};
        default:
            return state;
    }
}

const EditColorScreen = () => {
    const [state, dispatch] =  useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });

    console.log(state);

    return(
        <View>
            <ColorCounter
                color='red'
                onIncrease={() => dispatch({
                    type: 'change_red',
                    payload: COLOR_INCREMENT
                })}
                onDecrease={() => dispatch({
                    type: 'change_red',
                    payload: -1 * COLOR_INCREMENT
                })}/>
            <ColorCounter
                color='green'
                onIncrease={() => dispatch({
                    type: 'change_green',
                    payload: COLOR_INCREMENT
                })}
                onDecrease={() => dispatch({
                    type: 'change_green',
                    payload: -1 * COLOR_INCREMENT
                })}/>
            <ColorCounter
                color='blue'
                onIncrease={() => dispatch({
                    type: 'change_blue',
                    payload: COLOR_INCREMENT
                })}
                onDecrease={() => dispatch({
                    type: 'change_blue',
                    payload: -1 * COLOR_INCREMENT
                })}/>
            <View style={[styles.colorViewStyle,{backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    BtnStyle: {
        height: 20,
        width: 80,
    },
    colorViewStyle: {
        marginTop: 40,
        alignSelf: 'center',
        height: 50,
        width: 200,
    }
});

export default EditColorScreen;