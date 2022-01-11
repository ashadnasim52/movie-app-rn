import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Card,
  CardItem,
  Content,
} from 'native-base';
import {FlatList, View, Image, StatusBar} from 'react-native';
import Movie from '../components/Movie';

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <Container
          style={{
            backgroundColor: 'red',
            marginTop: 40,
          }}>
          <Content padder>
            <Card
              style={{
                marginTop: 10,
              }}>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: 'https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png',
                  }}
                  style={{height: 180, width: '100%', flex: 1}}
                />
              </CardItem>
            </Card>
            <Tabs style={{}}>
              <Tab
                style={{}}
                heading={
                  <TabHeading
                    style={{
                      backgroundColor: 'red',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      Camera
                    </Text>
                  </TabHeading>
                }>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <FlatList
                    columnWrapperStyle={{
                      justifyContent: 'space-between',
                      flex: 1,
                    }}
                    style={{
                      backgroundColor: 'red',
                    }}
                    data={[12, 5, 7, 1, 3, 3, 3, 3, 3, 3, 3, 4]}
                    numColumns={2}
                    renderItem={({item}) => {
                      return (
                        <View
                          style={{
                            width: '48%',
                          }}>
                          <Movie />
                        </View>
                      );
                    }}
                  />
                </View>
              </Tab>
              <Tab
                heading={
                  <TabHeading
                    style={{
                      backgroundColor: 'red',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      No Icon
                    </Text>
                  </TabHeading>
                }>
                <View>
                  <Text>Tab 2</Text>
                </View>
              </Tab>
            </Tabs>
          </Content>
        </Container>
      </>
    );
  }
}
