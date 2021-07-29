import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Qr2({navigation}) {
  return (
    <View>
      <Text>Im Qr2 Detaills</Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
