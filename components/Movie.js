import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
export default class Movie extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody>
          <Image
            source={require('../assets/images/series/barbarians/barbarians.jpg')}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
      </Card>
    );
  }
}
