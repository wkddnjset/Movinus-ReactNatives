import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import { Icon, Button }  from 'native-base'
import { Actions } from 'react-native-router-flux'
// Components
import HeaderComponent from './Header'

type Props = {};

export default class DrawerHeaderComponent extends Component<Props> {
    openDrawer(){
        Actions.drawerOpen()
    }
    openUser(){
        AsyncStorage.getItem('token', (err, result) => {
            if (result == null) {
                Actions.login()
            }
            else {
                Alert.alert(
                    '로그아웃',
                    '로그아웃 하시겠습니까?',
                    [
                        {text: '취소', onPress: () => console.log('취소')},
                        {text: '확인', onPress: () => {
                            AsyncStorage.removeItem('token')
                            Toast.show({
                                text: '로그아웃 되었습니다!',
                                textStyle : { fontWeight: "bold" },
                                type: "warning"
                            })
                        }},
                    ]
                )
            }
        })
    }
    render() {
        return (
            <HeaderComponent
                navBarLeft={(
                    <Button transparent onPress={this.openDrawer}>
                        <Icon type="EvilIcons" name="navicon" style={{color:"#000", fontSize:30}}/>
                    </Button>
                )}
                navTitle="Movinus"
                navBarRight={(
                    <Button transparent onPress={this.openUser}>
                        <Icon type="EvilIcons" name="user" style={{color:"#000", fontSize:35}}/>
                    </Button>
                )}
            />
        )
    }
}
