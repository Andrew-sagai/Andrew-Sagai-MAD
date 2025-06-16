import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerheader}>
        <View style={styles.hbcontainer} />
        <View style={styles.hb2container} />
        <View style={styles.hbcontainer} />
      </View>

      <View style={styles.contentContainer}>
        <Image 
          style={styles.logo} 
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>

      <View style={styles.containerfooter}>
        <View style={styles.fbcontainer} />
        <View style={styles.fb2container} />
        <View style={styles.fbcontainer} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    backgroundColor: 'white'
  },
 containerheader: {
    height: 140,
    backgroundColor: 'red',
    flexDirection:'row',
    justifyContent: 'flex-start', 
    alignItems:'center',
    paddingLeft: 10, 
  },   

  hbcontainer: {
    backgroundColor: 'black',
    height:80,
    width: 80,
    marginRight: 20, 
  },
  hb2container: {
    backgroundColor: 'yellow',
    height:80,
    width: 80,
    marginRight: 20, 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerfooter: {
    height: 140,
    backgroundColor: 'blue',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  fbcontainer: {
    backgroundColor: 'black',
    height:80,
    width: 80,
  },
  fb2container: {
    backgroundColor: 'yellow',
    height:80,
    width: 80,
  },
  logo: {
      width: 400,
      height: 150,
      resizeMode: 'contain',
  },
});

export default Flexbox;
