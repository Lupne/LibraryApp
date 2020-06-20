import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import Profile from '../pages/profile';
import MyBooks from '../pages/mybooks';
import Library from '../pages/library';
import About from '../pages/about';
import Direction from '../pages/direction'
import LibraryStack from './reviewstack'

const RootDrawerNavigator = createDrawerNavigator({
        Profile:{
            screen:Profile,
        },
        Library:{
          screen:LibraryStack,
        },
        MyBooks:{
          screen:MyBooks,
        },
        Direction:{
          screen:Direction,
        },
        About:{
          screen:About,
        },
});

export default RootDrawerNavigator
