import { 
  View, 
  StyleSheet, 
  Text, 
  ScrollView, 
  SafeAreaView,
  ActivityIndicator 
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './components/userCard/index'; // Pastikan path ini benar

const Exercise7 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading ke false setelah selesai
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />

      ) : (
        <ScrollView showsVerticalScrollIndicator={false}> 
          {users.map(user => (
            <Card
              key={user.id} 
              first={user.first_name}
              last={user.last_name}
              avatar={user.avatar}
              email={user.email}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Memastikan container memenuhi layar
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 30,
    margin: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
