import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {Images} from '@config';
import {Image} from '@components';
import styles from './styles';

export default function Loading({navigation}) {
  const onProcess = () => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 300);
  };
  useEffect(() => {
    onProcess();
  });

  return (
    <View style={[styles.container, {backgroundColor: 'orange'}]}>
      <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.content}>
        <Text title1 whiteColor semibold>
          MigRights
        </Text>
        <ActivityIndicator
          size="large"
          color="gray"
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
}
