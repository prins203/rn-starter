import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ComponentScreen from './ComponentScreen';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text
        style={styles.txtStyle}>Home</Text>
      <Button 
        title="Component Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Components')}/>
      <Button 
        title="Lists Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('List')}/>
      <Button 
        title="Images Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Images')}/>
      <Button 
        title="Counter Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Counter')}/>
      <Button 
        title="Color Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Color')}/>
      <Button 
        title="Edit Color Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('EditColor')}/>
      <Button 
        title="Text Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Text')}/>
      <Button 
        title="Box Style Demo" 
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Box')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  btnStyle: {
    padding: 30
  },
  txtStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 30
  }
});

export default HomeScreen;
