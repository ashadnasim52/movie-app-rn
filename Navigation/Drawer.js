import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../screens/About';
import Tabs from './Tabs';
import CustomDrawer from '../drawer/CustomDrawer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Tab" component={Tabs} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
