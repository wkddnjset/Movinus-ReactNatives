import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { Scene, Router, Actions, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux'
import SplashScreen from 'react-native-splash-screen'
// Pages
import Home from './src/Pages/Home'
import Login from './src/Pages/Login'
// Components
import SideMenuComponent from './src/Components/SideMenu'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
      SplashScreen.show();
      setInterval(() => SplashScreen.hide(), 1200);
  }
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene 
            key="drawer" 
            drawer={true}
            hideNavBar
            contentComponent={SideMenuComponent}
            drawerWidth={280}
            drawerPosition="left"
          >
            <Scene 
              hideNavBar
              key="home" 
              component={Home} 
            />
          </Scene>
          <Scene key="login" component={Login} hideNavBar/>
        </Stack>
      </Router>
    );
  }
}