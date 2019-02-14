import React, { Component } from 'react';
import { Header, Left, Body, Right, Title } from 'native-base'

export default class HeaderComponent extends Component {
  
  render() {
    return (
      <Header androidStatusBarColor="#000" style={{backgroundColor:this.props.navColor}} noShadow>
        <Left style={{flex:1}}>
          {this.props.navBarLeft}
        </Left>
        <Body style={{flex:2, alignSelf:'center'}}>
          {this.props.navTitle}
        </Body>
        <Right style={{flex:1}}>
          {this.props.navBarRight}
        </Right>
      </Header>
    );
  }
}