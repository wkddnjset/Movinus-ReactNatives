import React, { Component } from 'react';
import { Header, Left, Body, Right, Title } from 'native-base'

export default class HeaderComponent extends Component {
  
  render() {
    return (
      <Header androidStatusBarColor="#000" style={{backgroundColor:'#FFF'}} noShadow>
        <Left style={{flex:1}}>
          {this.props.navBarLeft}
        </Left>
        <Body style={{flex:2}}>
          <Title style={{color:"#000", alignSelf:'center'}}>{this.props.navTitle}</Title>
        </Body>
        <Right style={{flex:1}}>
          {this.props.navBarRight}
        </Right>
      </Header>
    );
  }
}