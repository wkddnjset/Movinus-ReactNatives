/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import { YellowBox } from 'react-native'
import SQLite from 'react-native-sqlite-storage'

function okCallback() {
    console.log("okCallback")
}
function errorCallback() {
    console.log("errorCallback")
}
SQLite.openDatabase({name : "testDB", createFromLocation : 1}, okCallback,errorCallback);

YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => App);
