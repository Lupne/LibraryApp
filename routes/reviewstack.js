import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../pages/login'
import Library from '../pages/library';
import RootDrawerNavigator from './drawer'

const screens = {
  Library:{
    screen:Library
  }
}

const LibraryStack = createStackNavigator(screens)

export default LibraryStack
