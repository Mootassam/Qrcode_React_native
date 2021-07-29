import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Generate from '@screens/Generate';
import Scan from '@screens/Scan';

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigators() {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen name="Generate" component={Generate} />
      <MainStack.Screen name="Scan" component={Scan} />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Generate"
        component={Generate}
        options={{
          title: 'Generate',
          // tabBarIcon: ({color}) => {
          //   return <Icon color={color} name="newspaper" size={20} solid />;
          // },
        }}
      />

      <BottomTab.Screen
        name="Scan"
        component={Scan}
        options={{
          title: 'Scan',
          // tabBarIcon: ({color}) => {
          //   return <Icon color={color} name="newspaper" size={20} solid />;
          // },
        }}
      />
    </BottomTab.Navigator>
  );
}
