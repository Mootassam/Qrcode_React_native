import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import BottomNavigator from './BottomNavigator';
import ScanQrcode from './ScanQrcode';

const DrawerNavigator = createDrawerNavigator({
  /*To have a header on the drawer screens, 
                          there must be a navigator that includes the screen you want to add to the drawer navigator.
                          See 'screen-stack-navigator' file*/
  Generate: BottomNavigator,
  Scan: ScanQrcode,
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
