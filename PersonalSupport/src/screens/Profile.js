import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color/Color';
import TopBarWithLogo from '../components/TopBarWithLogo';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary_1}}>
      <TopBarWithLogo iconRight="edit" />

      <TouchableOpacity style={styles.avatarWrapper}>
        <Image
          source={require('../assets/image/placeholder.jpg')}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <Text style={styles.name}>Nguyen Van Hung</Text>
      <Text style={styles.locate}>Hanoi, VietNam</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatarWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 30,
    alignSelf: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
  },
  locate: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
  },
});
