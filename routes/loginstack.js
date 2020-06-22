import React from 'react';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../pages/login'
import Register from '../pages/register'
import RootDrawerNavigator from './drawer'
import {View,Text} from 'react-native'
import Header from '../pages/header'

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
    navigationOptions:({navigation})=>{
            return{
                headerLeft:()=><Header navigation={navigation}/>,
                headerTitle:()=>{
                  return(
                    <View>
                          <Text></Text>
                    </View>
                  );
                }
            }
        }
  }
})


export default createAppContainer(LoginStack,{
    defaultNavigationOptions:{
        headerLeft:null,
        headerStyle: {
        height:90},
    }
});
