/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Main from './Main';
import Loading from '@screens/Loading';
import Qr1 from '@screens/Qr1';
import Qr2 from '@screens/Qr2';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();
export default function Navigator() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName="Loading">
        <RootStack.Screen
          name="Loading"
          component={Loading}
          options={{gestureEnabled: false}}
        />
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="Qr1" component={Qr1} />
        <RootStack.Screen name="Qr2" component={Qr2} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
