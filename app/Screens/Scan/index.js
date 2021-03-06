'use strict';

import React, {Component, useState} from 'react';

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

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

console.disableYellowBox = true;

export default function Scan({navigation}) {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  const onSuccess = e => {
    if (e.data === 'qr1') {
      navigation.navigate('Qr1');
    } else if (e.data === 'qr2') {
      navigation.navigate('Qr2');
    } else {
      alert('this code is not recognize please check another');
    }
    //
  };

  return (
    <View style={styles.conMain}>
      {/* <View style={styles.conHeader}>
      <Text style={styles.textHeader}>Contoh QR Code yang ke 129123x</Text>
  </View> */}
      <View style={styles.conQR}>
        <QRCodeScanner
          showMarker
          reactivate
          cameraStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
          customMarker={
            <View>
              <View style={{paddingTop: 20, flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => Alert.alert('Button Pressed!')}
                  style={{flexDirection: 'row', paddingLeft: 15}}>
                  <Text style={styles.centerText}>Nom Of School</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rectangleContainer}>
                <View style={styles.topOverlay}>
                  <Text style={{fontSize: 12, color: 'white'}}>
                    Scan QR Code here
                  </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* <View style={styles.leftAndRightOverlay} /> */}

                  <View style={styles.rectangle} />

                  {/* <View style={styles.leftAndRightOverlay} /> */}
                </View>

                {/* <View style={styles.bottomOverlay} /> */}
              </View>
            </View>
          }
          onRead={e => onSuccess(e)}
          ref={node => {
            const scanner = node;
          }}
        />
      </View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Text style={{alignSelf: 'center', textAlign: 'center'}}>
          Im Text will be here
        </Text>
      </View>
    </View>
  );
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
