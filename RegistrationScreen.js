import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Title from './components/Title';
import FormField from './components/Textinput';
import CustomButton from './components/button';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    const formData = {
      name,
      username,
      email,
      address,
      phoneNumber,
    };
    
    console.log("Data Registrasi Pengguna:", formData);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.container}>
          
        <Title>Registration</Title>

        <FormField
          label="Name"
          placeholder="Masukan nama lengkap anda"
          value={name}
          onChangeText={setName}
        />

        <FormField
          label="Username"
          placeholder="Masukan username anda"
          value={username}
          onChangeText={setUsername}
        />

        <FormField
          label="Email"
          placeholder="Masukan email anda"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <FormField
          label="Address"
          placeholder="Masukan alamat anda"
          value={address}
          onChangeText={setAddress}
        />

        <FormField
          label="Phone Number"
          placeholder="Masukkan nomor telepon anda"
          onChangeText={e => setPhoneNumber(e)}
          secureTextEntry={false}
          keyboardType="phone-pad"
        />

        <CustomButton title="Register" onPress={handleRegister} />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});

export default RegistrationScreen;