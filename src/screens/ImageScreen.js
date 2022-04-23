import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail 
                text='beach' 
                src={require('../../assets/beach.jpg')}
                imgScore={1}/>
            <ImageDetail 
                text='forest' 
                src={require('../../assets/forest.jpg')}
                imgScore={2}/>
            <ImageDetail 
                text='mountain' 
                src={require('../../assets/mountain.jpg')}
                imgScore={3}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageScreen;