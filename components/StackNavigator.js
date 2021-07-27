import {createStackNavigator} from 'react-navigation';
import {create} from 'react-test-renderer';
import GenerateQrcode from './GenerateQrcode';
import ScanQrcode from './ScanQrcode';
import Qr1 from '../Screens/Qr1';
import Qr2 from '../Screens/Qr2';

export const GenerateQrcodes = createStackNavigator({
  Generate: {screen: GenerateQrcode},
});

export const ScanQrcodes = createStackNavigator({
  Scan: {screen: ScanQrcode},
});

export const Qr1_1 = createStackNavigator({
  Qr1: {screen: Qr1},
});

export const Qr2_2 = createStackNavigator({
  Qr2: {screen: Qr2},
});
