import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from './components/Textinput';
import Button from './components/button';
import Title from './components/Title';

const Login = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome"/>
      <TextInput placeholder="Masukan email anda" />
      <TextInput placeholder="Masukan password anda" />
      <Button text="Sign In" />
      <Button text="Create new account" color="grey" textColor="white" />
      <Button text="sign in google" color="red" textColor="white" />
      <Button text="sign in facebbok" color="blue" textColor="white" />
      <Button text="sign in Apple" color="black" textColor="white" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
});