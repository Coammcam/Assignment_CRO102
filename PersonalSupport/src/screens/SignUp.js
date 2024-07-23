import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import {COLORS} from '../assets/color/Color';
import Button from '../components/Button';
import {useDispatch} from 'react-redux';
import {register} from '../redux/actions/authAction';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Avatar:', avatar);

    // Kiểm tra các trường bắt buộc
    if (!name.trim()) {
      Alert.alert('Thông báo', 'Tên không được để trống.');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Thông báo', 'Email không được để trống.');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Thông báo', 'Mật khẩu không được để trống.');
      return;
    }

    dispatch(register({email, password, name, avatar}))
      .unwrap()
      .then(response => {
        console.log('Đăng ký thành công:', response);
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log('Đăng ký thất bại:', error);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary_1,
        justifyContent: 'center',
      }}>
      <Image source={require('../assets/image/logo.png')} style={styles.logo} />
      <View style={styles.title}>
        <Text style={styles.title_1}>Sign Up</Text>
        <Text style={styles.title_2}>
          Sign up now for free and start {'\n'} meditating, and explore Medic.
        </Text>
      </View>
      <Input placeholder={'Name'} value={name} onChangeText={setName} />
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

      <Button text={'SIGNUP'} style={styles.button} onPress={handleRegister} />
      <Text style={styles.footer} onPress={() => navigation.navigate('Login')}>
        Already have an account? Sign In
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;

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
