import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assets/color/Color';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({iconName, error, password, forgotPassword, ...props}) => {
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.primary_2}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={iconName ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color={COLORS.primary_2}
          />
        )}
      </View>
      {forgotPassword && (
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  inputContainer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.primary_2,
  },
  textInput: {
    flex: 1,
    color: COLORS.primary_2,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 7,
    color: COLORS.primary_2,
  },
});
