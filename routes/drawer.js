import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import Profile from '../pages/profile';
import MyBooks from '../pages/mybooks';
import Library from '../pages/library';
import About from '../pages/about';
import Help from '../pages/help'

const RootDrawerNavigator = createDrawerNavigator({
        Profile:{
            screen:Profile,
            navigationOptions: {
              title:'Profile',
            }
        },
        Library:{
          screen:Library,
        },
        MyBooks:{
          screen:MyBooks,
            navigationOptions: {
              title:'MyBooks',
            }
        },
        Help:{
          screen:Help,
        },
        About:{
          screen:About,
        },
});

export default RootDrawerNavigator
