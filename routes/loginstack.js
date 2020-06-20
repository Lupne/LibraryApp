import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../pages/login'
import Register from '../pages/register'
import RootDrawerNavigator from './drawer'

const LoginStack = createStackNavigator({
  log:{
    screen:Login,
    navigationOptions:{
      headerTitle:'',
    }
  },
  reg:{
    screen:Register,
    navigationOptions:{
      headerTitle:'',
    }
  },
  draw:{
    screen:RootDrawerNavigator,
    navigationOptions:{
      headerTitle:'',
      headerLeft:false,
    }
  }
})


export default createAppContainer(LoginStack);
