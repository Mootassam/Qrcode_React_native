import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import Qr1 from '../Screens/Qr1';
import BottomNavigator from './BottomNavigator';
import ScanQrcode from './ScanQrcode';

const DrawerNavigator = createDrawerNavigator({
  /*To have a header on the drawer screens, 
                          there must be a navigator that includes the screen you want to add to the drawer navigator.
                          See 'screen-stack-navigator' file*/
  Generate: BottomNavigator,
  Scan: ScanQrcode,
  Qr1: Qr1,
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
