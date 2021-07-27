import {createStackNavigator} from 'react-navigation';
import GenerateQrcode from './GenerateQrcode';
import ScanQrcode from './ScanQrcode';
export const GenerateQrcodes = createStackNavigator({
  Generate: {screen: GenerateQrcode},
});

export const ScanQrcodes = createStackNavigator({
  Scan: {screen: ScanQrcode},
});
