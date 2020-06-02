import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile57882Navigator from '../features/UserProfile57882/navigator';
import Maps57863Navigator from '../features/Maps57863/navigator';
import Settings57841Navigator from '../features/Settings57841/navigator';
import Settings57826Navigator from '../features/Settings57826/navigator';
import NotificationList57825Navigator from '../features/NotificationList57825/navigator';
import Maps57824Navigator from '../features/Maps57824/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile57882: { screen: UserProfile57882Navigator },
Maps57863: { screen: Maps57863Navigator },
Settings57841: { screen: Settings57841Navigator },
Settings57826: { screen: Settings57826Navigator },
NotificationList57825: { screen: NotificationList57825Navigator },
Maps57824: { screen: Maps57824Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
