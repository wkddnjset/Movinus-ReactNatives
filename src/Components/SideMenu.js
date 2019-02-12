import React, { Component } from 'react';
import { Container, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HeaderComponent from './Header'

export default class SideMenuComponent extends Component {
  closeDrawer(){
    Actions.drawerClose()
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
      </Container>
    );
  }
}