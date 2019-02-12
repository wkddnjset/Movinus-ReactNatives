import React, {Component} from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import { Container, Icon, Button, H3, Thumbnail } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
// Components
import HeaderComponent from '../Components/Header'
import { Actions } from 'react-native-router-flux'

type Props = {};

const BackgourndImg = styled(ImageBackground)`
    width:100%;
    height: 100%;
    backgroundColor: #000000;
    justifyContent:center;
    alignItems:center;
`
const CloseBtn =  styled(Button)`
    justifyContent:flex-end;
`
const CancleIcon =  styled(Icon)`
    margin:20px;
    fontSize:30;
    color: #FFFFFF;
`
const Logo = styled.Text`
    color :#FFFFFF;
    marginBottom : 30;
    fontSize: 45;
    fontWeight: bold;
    marginTop: 150;
`
const SocialText = styled.Text`
    color :#FFFFFF;
    fontSize: 18;
    marginTop: 75;
`
const KakaoBtn =  styled(Button)`
    background:#F9E81E;
`
const KakaoIcon = styled(Icon)`
    color : #3F3035;
    fontSize: 29;
`
const KakaoText = styled(H3)`
    color : #3F3035;
    marginRight: 15;
    fontWeight: bold;
`
export default class Home extends Component<Props> {
    render() {
        return (
            <Container>
                <BackgourndImg imageStyle={{ opacity:0.5}} source={require('../Images/LoginBg.jpg')}>
                    <Grid>
                        <Row style={{justifyContent:"flex-end", width:"100%", height: 50}}>
                            <CloseBtn transparent onPress={Actions.pop}>
                                <CancleIcon name="close"/>
                            </CloseBtn>
                        </Row>
                        <Row style={{justifyContent:"center", width:"100%", flex: 1}}>
                            <Logo>Movinus</Logo>
                        </Row>
                        <Row style={{justifyContent:"center", width:"100%", flex: .4}}>
                            <SocialText>──────── 간편로그인 ────────</SocialText>
                        </Row>
                        <Row style={{justifyContent:"center", width:"100%", flex: .6}}>
                            <KakaoBtn transparent onPress={this.kakaoLogin}>
                                <KakaoIcon type="Ionicons" name="ios-chatbubbles"/>
                                <KakaoText>카카오톡으로 로그인하기</KakaoText>
                            </KakaoBtn>
                        </Row>
                    </Grid>
                </BackgourndImg>
            </Container>
        )
    }
}
