import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color/Color';
import Icon from 'react-native-vector-icons/Ionicons';

const TopBar = ({icon, text, onPress = () => {}, ...props}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Icon name={icon} size={22} onPress={onPress} color={'white'} />
        <Text style={styles.text}>{text}</Text>
        <Icon name={icon} size={22} color={COLORS.primary_1} />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 55,
    backgroundColor: COLORS.primary_1,
    // alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary_2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: '16',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
