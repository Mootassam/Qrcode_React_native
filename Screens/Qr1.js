import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Qr1() {
  const [image, setImage] = useState('');

  return (
    <View>
      <Text>Im Qr1 Detaills</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  stretch: {
    width: 100,
    height: 28,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    flex: 1,
  },
});
