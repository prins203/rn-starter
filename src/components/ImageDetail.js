import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
    return(
        <View>
            <Image source={props.src}/>
            <Text>{props.text}</Text>
            <Text>Image Score - {props.imgScore}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;