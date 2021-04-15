import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'key_email';

const setToken = async token => {
  await AsyncStorage.setItem(KEY_TOKEN, token);
};
const setEmail = async email => {
  await AsyncStorage.setItem(KEY_EMAIL, email);
};

const getToken = async () => {
  return await AsyncStorage.getItem(KEY_TOKEN);
};

const getEmail = async () => {
  return await AsyncStorage.getItem(KEY_EMAIL);
};

const Session = {
  setToken,
  setEmail,
  getToken,
  getEmail,
};

export {Session};
