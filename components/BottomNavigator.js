import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation';
import {GenerateQrcodes, ScanQrcodes} from './StackNavigator';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'ios-home';
  } else if (routeName === 'Profile') {
    iconName = 'ios-contact';
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Generate: GenerateQrcodes,
    Scan: ScanQrcodes,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

export default BottomTabNavigator;
