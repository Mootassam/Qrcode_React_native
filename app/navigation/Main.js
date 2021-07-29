import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@components';
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
          tabBarIcon: () => {
            return <Icon color="red" name="info-circle" size={20} solid />;
          },
        }}
      />

      <BottomTab.Screen
        name="Scan"
        component={Scan}
        options={{
          title: 'Scan',
          tabBarIcon: () => {
            return <Icon color="red" name="newspaper" size={20} solid />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
