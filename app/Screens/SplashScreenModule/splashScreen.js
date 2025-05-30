import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Image, SafeAreaView} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {

  const loadData = useCallback(async () => {
    try {
      setTimeout(async () => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Home',
              },
            ],
          }),
        );
      }, 1000);
    } catch (error) {
      console.log('error', error);
    }
  }, [navigation]);


  useEffect(() => {
    loadData();
  },[loadData]);

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={styles.logo}
        />
      </>
    </SafeAreaView>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {height: 294, width: 294},
});
