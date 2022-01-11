import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import {Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

export default class CusotomHeader extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: 'red',
          }}>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => {
                  this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent icon>
              <Image
                source={require('../assets/icons/search.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
