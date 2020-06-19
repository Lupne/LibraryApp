import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Profile from '../pages/profile';
import Library from '../pages/library';
import MyBooks from '../pages/mybooks';

const RootDrawerNavigator = createDrawerNavigator({
        Profile:{
            screen:Profile,
        },
        Library:{
          screen:Library,
        },
        MyBooks:{
          screen:MyBooks,
        }
});

export default RootDrawerNavigator
