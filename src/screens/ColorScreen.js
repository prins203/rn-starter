import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return(
        <View>
            <Button 
                title="Add Color"
                onPress={() => {
                    setColors([...colors, randRGB()]);
                }}/>
            <FlatList 
                data={colors}
                keyExtractor={(color) => color}
                renderItem={({item}) => {
                    return <View style={[styles.viewStyle, {backgroundColor: item}]}></View>;
                }}
            />
        </View>
);
}

const randRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 50,
        width: 50,
    }
});

export default ColorScreen;