import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../components/Input';
import {COLORS} from '../assets/color/Color';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/authAction';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {error, isLoggedIn} = useSelector(state => state.auth);

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert('Thông báo', 'Email không được để trống.');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Thông báo', 'Mật khẩu không được để trống.');
      return;
    }

    dispatch(login({email, password}));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('BottomTabNavigator');
    }
  }, [isLoggedIn, navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary_1,
        justifyContent: 'center',
      }}>
      <Image source={require('../assets/image/logo.png')} style={styles.logo} />
      <View style={styles.title}>
        <Text style={styles.title_1}>Sign In</Text>
        <Text style={styles.title_2}>
          Sign in now to acces your excercises {'\n'}and saved music.
        </Text>
      </View>
      <Input
        placeholder={'Email Address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        iconName={'eye-off-outline'}
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}
        password
        forgotPassword
      />
      {error && (
        <Text style={{color: 'red', marginHorizontal: 16}}>
          {error.message}
        </Text>
      )}
      <Button text={'LOGIN'} style={styles.button} onPress={handleLogin} />
      <Text style={styles.footer} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up
      </Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    marginHorizontal: 16,
  },
  title_1: {
    fontSize: 30,
    color: 'white',
  },
  title_2: {
    fontSize: 16,
    color: COLORS.primary_2,
    marginTop: 5,
    marginBottom: 20,
  },
  button: {
    // marginTop: ,
  },
  footer: {
    alignSelf: 'center',
    color: 'white',
  },
});
