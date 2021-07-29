import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function Generate() {
  const [inputText, setInputText] = useState('Generation of QR Code');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{inputText}</Text>
        <QRCode
          //QR code value
          value={qrvalue ? qrvalue : 'NA'}
          //size of QR Code
          size={250}
          enableLinearGradient
          gradientDirection
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          //Logo of in the center of QR Code (Optional)
          //Center Logo size  (Optional)
          logoSize={30}
          //Center Logo margin (Optional)
          logoMargin={2}
          //Center Logo radius (Optional)
          logoBorderRadius={15}
          //Center Logo background (Optional)
          logoBackgroundColor="yellow"
        />
      </View>
      <View style={styles.download}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue('qr1')}>
          <Text style={styles.buttonTextStyle}>Text of Qr1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDownload} onPress={() => {}}>
          <Text style={styles.buttonTextStyle}>Download QR1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.download}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue('qr2')}>
          <Text style={styles.buttonTextStyle}>Text of Qr2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDownload} onPress={() => {}}>
          <Text style={styles.buttonTextStyle}>Download QR2</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingBottom: 15,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: 'rgb(53,126,221)',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 2,
    width: 150,
  },
  buttonDownload: {
    backgroundColor: 'rgb(222,76,36)',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 2,
    width: 150,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  download: {
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
});
