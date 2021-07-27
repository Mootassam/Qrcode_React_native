import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import GenerateQrcode from './GenerateQrcode';
import ScanQrcode from './ScanQrcode';

const DrawerNavigator = createDrawerNavigator({
  /*To have a header on the drawer screens, 
                          there must be a navigator that includes the screen you want to add to the drawer navigator.
                          See 'screen-stack-navigator' file*/
  Generate: GenerateQrcode,
  Scan: ScanQrcode,
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
