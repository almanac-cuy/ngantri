import React, {Component} from 'react';
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
  View,
  Text,
} from 'native-base';
import {StyleSheet} from 'react-native';
class Queue extends Component {
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
            <Title style={{color: 'black'}}>Queue</Title>
          </Body>
          <Right></Right>
        </Header>
        <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
          <View style={style.ContainerQueue}>
            <Text>Antrian Sekarang</Text>

            <Text style={{fontSize: 50}}>10</Text>
          </View>
          <View style={style.Text1}>
            <Text>Nomor Anda</Text>
            <View style={style.NumberQueue}>
              <Text style={{fontSize: 75, color: 'white'}}>11</Text>
            </View>
            {/* </View> */}
          </View>
          <View style={style.ContainerQueue}>
            <Text>Antrian Selanjutnya</Text>

            <Text style={{fontSize: 50}}>12</Text>
          </View>
        </View>
      </Container>
    );
  }
}

export default Queue;

const style = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  ContainerQueue: {
    backgroundColor: '#f3f5f7',
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  Text1: {
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  NumberQueue: {
    backgroundColor: 'grey',
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
