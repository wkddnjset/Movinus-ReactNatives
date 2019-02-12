import React, {Component} from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import styled from 'styled-components/native'
import { Container, Icon, Button, H3, Item, Input } from 'native-base'
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
const LogoContainer = styled.View`
    height:100%;
    alignItems: center;
    justifyContent: center;
`
const LogoImage = styled.Image`
    marginTop: 120;
    marginBottom: 120;
    width: 280;
    height: 70;
    justifyContent: center;
`
const InputWrapper = styled(Item)`
    marginTop: 10;
    marginLeft: 10%;
    marginRight: 10%;
    paddingLeft: 10;
    paddingRight: 10;
    width: 80%;
    height: 50;
`
const InputBox = styled(Input)`
    color: #FFFFFF;
`
const LoginBtn =  styled(Button)`
    background:#4586C6;
    width:80%;
    marginTop: 50;
    marginLeft: 10%;
    marginRight: 10%;
    borderRadius: 50;
`
const LoginText = styled(H3)`
    color : #FFFFFF;
    width:100%;
    fontSize: 18;
    textAlign:center;
`
const ToSignUpText = styled.Text`
    color: #FFFFFF;
    marginTop: 10;
    textDecorationLine: underline;
`
export default class Login extends Component<Props> {
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
                    </Grid>
                    <LogoContainer>
                        <LogoImage source={require('../Images/logo.png')}/>
                        <InputWrapper rounded>
                            <InputBox returnKeyType='next' placeholder='이메일'/>
                        </InputWrapper>
                        <InputWrapper rounded>
                            <InputBox secureTextEntry placeholder='비밀번호'/>
                        </InputWrapper>
                        <LoginBtn transparent onPress={this.kakaoLogin}>
                            <LoginText>로그인 하기</LoginText>
                        </LoginBtn>
                        <ToSignUpText>아직 무비너스 회원이 아니신가요?</ToSignUpText>
                    </LogoContainer>
                </BackgourndImg>
            </Container>
        )
    }
}
