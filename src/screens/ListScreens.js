import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreens = () => {
    const friends = [
        { name: 'Friend #1', age: 1},
        { name: 'Friend #2', age: 2},
        { name: 'Friend #3', age: 3},
        { name: 'Friend #4', age: 4},
        { name: 'Friend #5', age: 5},
        { name: 'Friend #6', age: 6},
        { name: 'Friend #7', age: 7}
    ];

    return (
        <FlatList 
            showsHorizontalScrollIndicator={false}
            data={friends}
            keyExtractor={(frnd) => frnd.name.slice(-1)}
            renderItem={({item}) => <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>}/>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 50
    }
});

export default ListScreens;