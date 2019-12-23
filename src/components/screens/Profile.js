import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Right,
  Body,
  Title,
  H1,
  H3,
} from 'native-base';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header style={style.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                type="FontAwesome"
                style={{color: 'black'}}
                name="arrow-left"
              />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black'}}>Profile</Title>
          </Body>
          <Right>
            {/* <Button
              transparent
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon
                type="FontAwesome5"
                style={{color: 'black'}}
                name="user-circle"
              />
            </Button> */}
          </Right>
        </Header>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
