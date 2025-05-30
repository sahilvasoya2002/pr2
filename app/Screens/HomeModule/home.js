import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setLoading } from '../../Actions/appAction';

const chatData = [
  {
    id: 1,
    name: 'Megan Smith',
    avatar: require('../../Assets/Images/avatar.png'),
    message: 'I’ve just received an e-mail from lorem ipsum.',
    time: '3h',
    unread: 2,
    isOnline: true,
  },
  {
    id: 2,
    name: 'Renee Whilliams',
    avatar: require('../../Assets/Images/avatar.png'),
    message: 'This is one of my faves plays.',
    time: '3h',
    unread: 0,
    isOnline: true,
  },
  {
    id: 3,
    name: 'Matt Taylor',
    avatar: require('../../Assets/Images/avatar.png'),
    message: 'Do we have meeting tomorrow?',
    time: '3h',
    unread: 2,
    isOnline: true,
  },
  {
    id: 4,
    name: 'Mark Antony',
    avatar: require('../../Assets/Images/avatar.png'),
    message: 'Got the file, thanks',
    time: '3h',
    unread: 2,
    isOnline: true,
  },
  {
    id: 5,
    name: 'Christian Walsh',
    avatar: require('../../Assets/Images/avatar.png'),
    message: 'You: Do you know where do we...',
    time: '3h',
    unread: 0,
    isOnline: false,
  },
  {
    id: 5,
    name: 'Christian Walsh',
    avatar: require('../../Assets/Images/avatar.png'),
    message: 'You: Do you know where do we...',
    time: '3h',
    unread: 0,
    isOnline: false,
  },
  {
    id: 5,
    name: 'Christian Walsh',
    avatar: require('../../Assets/Images/avatar.png'),
    message: 'You: Do you know where do we...',
    time: '3h',
    unread: 0,
    isOnline: false,
  },
];

export default function Home() {
  const userSelector = useSelector(state => state.app);
  const {loading} = userSelector || {};
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLoading(false))
  },[dispatch])
  console.log('=========', loading);
  const renderSingleChat = ({item}) => {
    return (
      <TouchableOpacity style={styles.chatItem}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.chatTextContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {item.name}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.message}>
            {item.message}
          </Text>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Text>3h</Text>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
            }}>
            <Text>2</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Images/chatBg.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.text}>home</Text>
          <FlatList
            data={chatData}
            renderItem={renderSingleChat}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{paddingVertical: 8}}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    marginTop: 140,
  },
  text: {
    color: 'black',
    fontSize: 24,
    marginLeft: 24,
    marginBottom: 12,
  },
  chatItem: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 25,
    marginRight: 12,
  },
  chatTextContainer: {
    flex: 1,
    maxWidth: 200,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    color: '#333',
  },
});
