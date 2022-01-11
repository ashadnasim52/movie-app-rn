import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabIcon from '../components/TabIcon';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#830000',
          borderTopColor: 'transparent',
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={require('../assets/icons/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={require('../assets/icons/play-button.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={require('../assets/icons/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
