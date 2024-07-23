import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/color/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import Lesson from '../components/Lesson';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.primary_1, padding: 16}}>
      <ScrollView>
        <View style={styles.header}>
          <Icon name="reorder-three" size={35} color={COLORS.primary_2} />
          <Image
            source={require('../assets/image/logo.png')}
            style={styles.logo}
          />
          <Image
            source={require('../assets/image/user_image.jpg')}
            style={styles.user_image}
          />
        </View>

        <Text style={styles.title_1}>Welcome back, Cam!</Text>
        <Text style={styles.title_2}>How are you feeling today ?</Text>

        <View style={styles.section}>
          <View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('DailyReflections')}>
              <Icon name="calendar-clear" size={35} color={COLORS.primary_1} />
            </TouchableOpacity>
            <Text style={styles.item_content}>Take note</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.item}>
              <Icon name="logo-twitter" size={35} color={COLORS.primary_1} />
            </TouchableOpacity>
            <Text style={styles.item_content}>Calm</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.item}>
              <Icon name="logo-twitter" size={35} color={COLORS.primary_1} />
            </TouchableOpacity>
            <Text style={styles.item_content}>Calm</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.item}>
              <Icon name="logo-twitter" size={35} color={COLORS.primary_1} />
            </TouchableOpacity>
            <Text style={styles.item_content}>Calm</Text>
          </View>
        </View>

        <Lesson
          title="Meditation 101"
          text="Techniques, Benefits, and a Beginner's How-To"
          image={require('../assets/image/meditation.png')}
        />

        <Lesson
          title="Cardio Meditation"
          text="Basics of Yoga for Beginners or Experienced Professionals"
          image={require('../assets/image/meditation_heart.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  user_image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  title_1: {
    fontSize: 30,
    color: 'white',
  },
  title_2: {
    fontSize: 18,
    color: COLORS.primary_2,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  item: {
    width: 65,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item_content: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 5,
  },
});
