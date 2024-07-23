import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/color/Color';

const Lesson = ({title, text, image, onPress = () => {}, ...props}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={{color: 'white', marginEnd: 8, fontSize: 12}}>
            watch now
          </Text>
          <Icon name="caret-forward-circle" size={16} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 170,
    backgroundColor: 'white',
    padding: 8,
    // borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginStart: 10,
  },
  title: {
    fontSize: 22,
    color: COLORS.primary_1,
  },
  text: {
    fontSize: 13,
    color: COLORS.primary_1,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.primary_1,
    paddingVertical: 12,
    alignItems: 'center',
    marginEnd: 35,
    borderRadius: 8,
  },
  imageWrapper: {
    flex: 1,
    // width: 166,
    height: '100%',
    // backgroundColor: 'black',
    // resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'center',
    // backgroundColor: 'green',
    width: '90%',
    height: '90%',
  },
});
