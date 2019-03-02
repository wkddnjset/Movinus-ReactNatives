import React, { Component } from 'react';
import { Container, Button, Icon, Content, ListItem, Left, Body, Right, Switch } from 'native-base'
import styled from 'styled-components/native'
import { Text, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import HeaderComponent from './Header'
//Contexts
import { AccountConsumer } from '../Contexts/Account'

const SideText = styled.Text`
  fontSize: 18;
  color: #182433;
`
export default class SideMenuComponent extends Component {
  closeDrawer(){
    Actions.drawerClose()
  }
  toMyList(){
    Actions.my_list()
    // AsyncStorage.getItem('token', (err, result) => {
    //   if (result == null) {
    //     Actions.login()
    //   }
    //   else {
    //     Actions.my_list()
    //   }
    // })
  }
  render() {
    return (
      <Container>
        <HeaderComponent
          navBarRight={(
            <Button transparent onPress={this.closeDrawer}>
              <Icon name="close" style={{color:"#000"}}/>
            </Button>
          )}
        />
        <Content>
          <ListItem icon onPress={Actions.home}>
            <Left>
              <Icon active name="home"/>
            </Left>
            <Body>
              <SideText>홈</SideText>
            </Body>
          </ListItem>
          <ListItem icon onPress={ this.toMyList }>
            <Left>
              <Icon active name="list"/>
            </Left>
            <Body>
              <SideText>내가 쓴 리뷰</SideText>
            </Body>
          </ListItem>
          <ListItem icon onPress={Actions.search}>
            <Left>
              <Icon active name="search"/>
            </Left>
            <Body>
              <SideText>영화 검색</SideText>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}