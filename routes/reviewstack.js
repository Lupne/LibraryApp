import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Review from '../pages/review'
import Library from '../pages/library';
import RootDrawerNavigator from './drawer'

const screens = {
  Library:{
    screen:Library,
  },
  Review:{
    screen:Review
  }
}

const LibraryStack = createStackNavigator(screens)

export default LibraryStack
