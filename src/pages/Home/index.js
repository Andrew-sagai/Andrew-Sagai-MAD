import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Profile} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greetingText}>Hi, John Doe</Text>
          <Text style={styles.subGreeting}>Have you track your money today?</Text>
        </View>
          <Profile/>
      </View>
        <Gap height={24} />
      <View style={styles.MoneyContainer}>
        <Text style={styles.sectionTitle}>Your Balance</Text>
        <Text style={styles.totalBalance}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.balanceDetails}>
          <Text>Cash on Hand</Text>
            <Text>              </Text>
          <Text>Rp. 4.000.000</Text>
        </View>
        <View style={styles.balanceDetails}>
          <Text>Cash on Bank</Text>
          <Text>              </Text>
          <Text>Rp. 6.000.000</Text>
        </View>
      </View>
        <Gap height={70}/>
      <View style={styles.transactionContainer}>
        <Text style={styles.sectionTitle}>Add Transaction</Text>
        <Gap height={12} />
        <Button text="Cash On Hand" />
        <Gap height={12} />
        <Button text="Cash On Bank" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFC',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  headerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  paddingVertical: 12,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
  },
  profilestyle: {
    width: 50,
    height: 50,
    resizeMode : 'contain',
  },
  MoneyContainer: {
    backgroundColor : '#FFFFFF',
    marginTop: 32,
    padding: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalBalance: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 12,
    alignSelf: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 12,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 4,
  },
  transactionContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 32,
  },
});