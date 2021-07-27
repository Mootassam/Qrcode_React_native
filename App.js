'use strict';

import React, {Component} from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  Alert,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import GenerateQrcode from './components/GenerateQrcode';

import ScanQrcode from './components/ScanQrcode';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <View style={styles.conMain}>
        <ScanQrcode />
      </View>
    );
  }
}

const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.5; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = 'red';

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = '#22ff00';

const styles = StyleSheet.create({
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  conMain: {
    flex: 1,
    height: SCREEN_HEIGHT,
  },
  conHeader: {
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 18,
    color: 'white',
  },
  conQR: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centerText: {
    marginLeft: 15,
    fontSize: 20,
    color: 'orange',
  },
  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  topOverlay: {
    // height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    // backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
});
