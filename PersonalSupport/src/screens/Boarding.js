import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Boarding = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/image/background.png')}
      style={styles.background}>
      <Image source={require('../assets/image/logo.png')} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={[styles.textHeader, {fontSize: 34}]}>Welcome</Text>
        <Text style={styles.textHeader}>Do meditation. Stay focused.</Text>
        <Text style={styles.textHeader}>Live a healthy life.</Text>
      </View>
      <Button
        text={'Login With Email'}
        onPress={() => navigation.navigate('Login')}
      />
      <Text style={styles.footer} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up
      </Text>
    </ImageBackground>
  );
};

export default Boarding;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // resizeMode: 'repeat',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    // alignItems: 'center',
    alignSelf: 'center',
  },
  textContainer: {alignItems: 'center', marginBottom: 100},
  textHeader: {
    color: 'white',
    fontSize: 20,
  },
  footer: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
  },
});
