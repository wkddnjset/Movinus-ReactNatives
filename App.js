import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { Scene, Router, Actions, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux'
import SplashScreen from 'react-native-splash-screen'
// Pages
import Home from './src/Pages/Home'
import MyList from './src/Pages/MyList'
import Search from './src/Pages/Search'
import Login from './src/Pages/Login'
import Detail from './src/Pages/Detail'
// Components
import SideMenuComponent from './src/Components/SideMenu'
import DrawerHeaderComponent from './src/Components/DrawerHeader'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
      SplashScreen.show()
      setInterval(() => SplashScreen.hide(), 1200)
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene 
            key="drawer" 
            drawer={true}
            contentComponent={SideMenuComponent}
            drawerWidth={280}
            drawerPosition="left"
            hideNavBar>
            <Scene key="main"> 
              <Scene key="home" component={Home} type='replace' hideNavBar/>
              <Scene key="my_list" component={MyList} type='replace' hideNavBar/>
              <Scene key="search" component={Search} type='replace' hideNavBar/>
            </Scene>
          </Scene>
          <Scene key="login" component={Login} hideNavBar/>
          <Scene key="detail" component={Detail} hideNavBar/>
        </Scene>
      </Router>
    );
  }
}