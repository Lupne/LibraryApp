import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../pages/login'
import Register from '../pages/register'
import RootDrawerNavigator from './drawer'

const LoginStack = createStackNavigator({
  log:{
    screen:Login,
    navigationOptions: {
        headerShown: false,
      }
  },
  reg:{
    screen:Register,
    navigationOptions: {
        headerShown: false,
      }
  },
  draw:{
    screen:RootDrawerNavigator,
    navigationOptions: {
      title:'',
      headerShown:false,
      }
  }
})


export default createAppContainer(LoginStack);
