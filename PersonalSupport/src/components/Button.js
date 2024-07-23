import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color/Color';

const Button = ({text, onPress = () => {}}, ...props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 60,
    // width: '100%',
    backgroundColor: COLORS.primary_3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 30,
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});
