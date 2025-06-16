import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Card = ({first, last, email, avatar}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: avatar}} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{last}</Text> {first}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  img: {
    height: 80, 
    width: 80,
    borderRadius: 15,
    marginRight: 15,
    
    resizeMode: 'cover', 
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20, 
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14, 
    color: '#666',
  },
});
