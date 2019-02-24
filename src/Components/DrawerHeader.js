import React, {Component} from 'react';
import { AsyncStorage, Text, View, Alert } from 'react-native'
import styled from 'styled-components/native'
import { Icon, Button, H3, Toast }  from 'native-base'
import { Actions } from 'react-native-router-flux'
// Components
import HeaderComponent from './Header'

type Props = {};

const Logo = styled(H3)`
    color: #FFF;
    alignSelf: center;
    fontSize: 23;
    fontFamily: BMJUA_ttf;
`
export default class DrawerHeaderComponent extends Component<Props> {
    constructor(props: Props) { 
        super(props); 
        this.state = { 
            isLogined: this.props.isLogined,
        }
        this.openDrawer = this.openDrawer.bind(this)
    }
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
                                type: "success",
                                style: {
                                    backgroundColor: "#4586C6"
                                }
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
                navColor="#182433"
                navBarLeft={(
                    <Button transparent onPress={this.openDrawer}>
                        <Icon type="EvilIcons" name="navicon" style={{color:"#FFF", fontSize:30}}/>
                    </Button>
                )}
                navTitle={(<Logo onPress={Actions.home}>무비너스</Logo>)}
                navBarRight={(
                    <Button transparent onPress={this.openUser}>
                        <Icon type="EvilIcons" name="user" style={{color:"#FFF", fontSize:35}}/>
                    </Button>
                )}
            />
        )
    }
}
