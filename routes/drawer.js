import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Profile from '../pages/profile';
import Library from '../pages/library';
import MyBooks from '../pages/mybooks';

const RootDrawerNavigator = createDrawerNavigator({
        Profile:{
            screen:Profile,
            navigationOptions: {
              title:'Profile',
            }
        },
        Library:{
          screen:Library,
          navigationOptions: {
            title:'Library',
          }
        },
        MyBooks:{
          screen:MyBooks,
            navigationOptions: {
              title:'MyBooks',
            }
        }
});

export default RootDrawerNavigator
