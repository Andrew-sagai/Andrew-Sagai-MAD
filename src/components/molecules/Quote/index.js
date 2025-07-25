import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Quote = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Quote;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    marginLeft: 24,
    marginVertical: 38,
  },
  Text1{}
});