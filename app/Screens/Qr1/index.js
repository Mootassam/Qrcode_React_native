import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Detail1({navigation}) {
  return (
    <View>
      <Text>Im Qr1 Detaills</Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
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
