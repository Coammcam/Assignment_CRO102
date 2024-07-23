import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopBar from '../components/TopBar';
import {COLORS} from '../assets/color/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addNote,
  fetchNotesByUser,
  updateNote,
} from '../redux/actions/noteAction';
import moment from 'moment-timezone';

const {width: screenWidth} = Dimensions.get('window');

const DailyReflections = ({navigation}) => {
  const itemWidth = screenWidth / 2;

  const [modelVisible, setModelVisible] = useState(false);
  const [content, setContent] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();
  const {notes, status, error} = useSelector(state => state.notes);
  const userId = useSelector(state => state.auth.userId);

  useEffect(() => {
    if (status === 'idle' && userId) {
      dispatch(fetchNotesByUser(userId));
    }
  }, [dispatch, status, userId]);

  const openModal = item => {
    setSelectedItem(item);
    setContent(item.content || '');
    setModelVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModelVisible(false);
  };

  const handleAddNote = () => {
    if (!userId) {
      Alert.alert('Error', 'User not logged in.');
      return;
    }

    const today = moment().tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD');
    console.log(today);
    const existingNote = notes.find(note => note.date === today);

    if (existingNote) {
      Alert.alert('Error', 'Ghi chu ngay hom nay da ton tai');
      return;
    }

    const newDate = new Date();
    const formattedDate = [
      newDate.getFullYear(),
      String(newDate.getMonth() + 1).padStart(2, '0'),
      String(newDate.getDate()).padStart(2, '0'),
    ].join('-');

    dispatch(
      addNote({
        userId,
        date: formattedDate,
        content: content,
      }),
    )
      .then(resultAction => {
        if (addNote.fulfilled.match(resultAction)) {
          setContent('');
          closeModal();
        } else {
          console.log(
            'Failed to add note:',
            resultAction.payload || 'An error occurred',
          );
        }
      })
      .catch(err => {
        console.log('Failed to add note:', err.message || 'An error occurred');
      });
  };

  const handleUpdateNote = () => {
    const updatedNote = {
      ...selectedItem,
      content: content,
    };

    dispatch(updateNote(updatedNote))
      .then(resultAction => {
        if (updateNote.fulfilled.match(resultAction)) {
          setContent('');
          closeModal();
        } else {
          console.log(
            'Failed to update note:',
            resultAction.payload || 'An error occurred',
          );
        }
      })
      .catch(err => {
        console.log(
          'Failed to update note:',
          err.message || 'An error occurred',
        );
      });
  };

  const formatDay = dateString => {
    const [year, month, day] = dateString.split('-');
    console.log(`${dateString}`);
    return `${day}`;
  };

  const formatMonth = dateString => {
    const [year, month, day] = dateString.split('-');
    let monthName;
    if (month === '07') {
      monthName = 'July';
    } else if (month === '08') {
      monthName = 'August';
    }

    return `${monthName}`;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary_1}}>
      <TouchableOpacity style={styles.FAB} onPress={handleAddNote}>
        <Icon name="add-circle" size={55} color={'#A9D571'} />
      </TouchableOpacity>

      <TopBar
        icon={'return-down-back-outline'}
        text="Daily Reflections"
        onPress={() => navigation.navigate('Home')}
      />

      <FlatList
        data={notes}
        numColumns={2}
        keyExtractor={(item, index) => `${item.date}-${index}`}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.item, {height: itemWidth}]}>
              <TouchableOpacity
                style={styles.item_2}
                onPress={() => {
                  openModal(item);
                }}>
                <View style={styles.topTitle}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: -12,
                    }}>
                    <Icon name="pin-sharp" size={25} color={'white'} />
                    <Icon name="pin-sharp" size={25} color={'white'} />
                    <Icon name="pin-sharp" size={25} color={'white'} />
                    <Icon name="pin-sharp" size={25} color={'white'} />
                  </View>
                </View>
                <View style={styles.bottomTitle}>
                  <Text style={styles.title}>{formatMonth(item.date)}</Text>
                  <Text style={styles.title}>{formatDay(item.date)}</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />


      <Modal
        animationType="fade"
        transparent={true}
        visible={modelVisible}
        onRequestClose={() => {
          setModelVisible(!modelVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              {selectedItem && (
                <Text style={styles.textModalHeader}>{selectedItem.date}</Text>
              )}
            </View>
            <TextInput
              style={styles.modalInput}
              multiline={true}
              textAlignVertical="top"
              placeholder="Type here..."
              placeholderTextColor="grey"
              value={content}
              onChangeText={setContent}
            />
            <View style={styles.modalFooter}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Octicons name="dot-fill" size={13} color={'white'} />
                <Text style={styles.textModalFooter}>Have a good day!</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: 'red', marginEnd: 10},
                  ]}
                  onPress={closeModal}>
                  <Icon name="close" size={17} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: 'green', borderBottomEndRadius: 5},
                  ]}
                  onPress={handleUpdateNote}>
                  <Icon name="checkmark" size={15} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default DailyReflections;

const styles = StyleSheet.create({
  item: {
    width: '50%',
    marginTop: 16,
  },
  item_2: {
    flex: 1,
    backgroundColor: 'white',
    margin: 8,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderRadius: 3,
  },
  topTitle: {
    backgroundColor: '#7fc8e8',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1.5,
  },
  bottomTitle: {
    flex: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: 'black',
  },
  FAB: {
    position: 'absolute',
    end: 20,
    bottom: 20,
    zIndex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    margin: 20,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    width: '100%',
    height: '60%',
    // marginHorizontal: 20,
  },
  modalHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#7fc8e8',
    borderTopStartRadius: 9,
    borderTopEndRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    // color: 'white',
  },
  modalInput: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlignVertical: 'top',
  },
  modalFooter: {
    width: '100%',
    height: 40,
    backgroundColor: '#7fc8e8',
    borderBottomStartRadius: 9,
    borderBottomRightRadius: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  textModalHeader: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  textModalFooter: {
    fontSize: 15,
    color: 'white',
    // justifyContent: 'center',
    // alignContent: 'center',
    marginStart: 5,
  },
  button: {
    width: 40,
    height: 25,
    backgroundColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
