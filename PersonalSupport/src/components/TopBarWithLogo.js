import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/color/Color';

const TopBarWithLogo = ({
  iconRight,
  iconLeftOnPress = () => {},
  iconRightOnPress = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Icon name="list" size={22} onPress={iconLeftOnPress} color={'white'} />
        <Image
          source={require('../assets/image/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={iconRightOnPress}>
          {typeof iconRight === 'string' ? (
            <Text style={styles.iconRightText}>{iconRight}</Text>
          ) : (
            <Image source={iconRight} style={styles.avatar} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBarWithLogo;

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
  },
  logo: {
    width: 55,
    height: 55,
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 25,
  },
  iconRightText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
