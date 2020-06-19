import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Login from './pages/login'
import Register from './pages/register'
import LoginStack from './routes/loginstack'

export default function App() {
  return (
      <LoginStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
