import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');
    return(
        <View>
            <Text style={styles.headingStyle}>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            {name.length<=5?<Text style={{marginLeft: 15}}>Password must be longer than 5 characters</Text>:null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20
    },
    headingStyle: {
        fontSize: 30,
        margin: 15
    }
});

export default TextScreen;