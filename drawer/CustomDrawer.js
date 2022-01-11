import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {H2, Icon, Text, Thumbnail} from 'native-base';

import Setting from '../assets/cart.png';
const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        zIndex: 1000,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 60,
          marginBottom: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <H2
            style={{
              color: 'orange',
            }}>
            Sakshi
          </H2>
          <Text
            style={{
              color: 'orange',
            }}>
            {' '}
            Your Last Name
          </Text>
        </View>
        <View>
          <Thumbnail
            large
            source={{
              uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
            }}
          />
        </View>
      </View>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Orders"
        style={{
          borderBottomColor: 'orange',
          borderBottomWidth: 0.5,
          borderTopColor: 'orange',
          borderTopWidth: 1,
        }}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        icon={({focused, color, size}) => (
          <Thumbnail
            small
            square
            source={Setting}
            style={{
              resizeMode: 'contain',
            }}
          />
        )}
      />
      <DrawerItem
        label="Wishlist"
        style={{
          borderBottomColor: 'orange',
          borderBottomWidth: 0.5,
        }}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        icon={({focused, color, size}) => (
          <Thumbnail
            small
            square
            source={Setting}
            style={{
              resizeMode: 'contain',
            }}
          />
        )}
      />
      <DrawerItem
        label="Help Center"
        style={{
          borderBottomColor: 'orange',
          borderBottomWidth: 0.5,
        }}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        icon={({focused, color, size}) => (
          <Thumbnail
            small
            square
            source={Setting}
            style={{
              resizeMode: 'contain',
            }}
          />
        )}
      />
      <DrawerItem
        label="Address"
        style={{
          borderBottomColor: 'orange',
          borderBottomWidth: 0.5,
        }}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        icon={({focused, color, size}) => (
          <Thumbnail
            small
            square
            source={Setting}
            style={{
              resizeMode: 'contain',
            }}
          />
        )}
      />
      <DrawerItem
        label="Setting"
        style={{
          borderBottomColor: 'orange',
          borderBottomWidth: 0.5,
        }}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        icon={({focused, color, size}) => (
          <Thumbnail
            small
            square
            source={Setting}
            style={{
              resizeMode: 'contain',
            }}
          />
        )}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});

// focused: Boolean indicating whether to highlight the drawer item as active.
// onPress (required): Function to execute on press.
// activeTintColor: Color for the icon and label when the item is active.
// inactiveTintColor: Color for the icon and label when the item is inactive.
// activeBackgroundColor: Background color for item when it's active.
// inactiveBackgroundColor: Background color for item when it's inactive.
// labelStyle: Style object for the label Text.
// style: Style object for the wrapper View.
