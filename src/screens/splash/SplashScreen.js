import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Session} from '../../data/session/Session';

import {useRoute, useNavigation} from '@react-navigation/native';

const SplashScreen = props => {
  const navigation = useNavigation();
  useEffect(() => {
    const init = () => {
      Session.getToken().then(token => {
        if (token === null) {
          navigation.navigate('Login');
        } else {
          navigation.navigate('Home');
        }
      });
    };
    init();
  }, [navigation]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Spalash screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
