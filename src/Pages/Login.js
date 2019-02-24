import React, {Component} from 'react'
import { Text, View, ImageBackground, Image, AsyncStorage } from 'react-native'
import styled from 'styled-components/native'
import { Container, Icon, Button, H3, Item, Input } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
// Components
import HeaderComponent from '../Components/Header'
import { Actions } from 'react-native-router-flux'

const BackgourndImg = styled(ImageBackground)`
    width:100%;
    height: 100%;
    backgroundColor: #182433;
    justifyContent:center;
    alignItems:center;
`
const CloseBtn =  styled(Button)`
    justifyContent:flex-end;
`
const CloseIcon =  styled(Icon)`
    margin:20px;
    fontSize:30;
    color: #FFFFFF;
`
const LogoContainer = styled.View`
    height:100%;
    alignItems: center;
    justifyContent: center;
`
const Logo = styled.Text`
    color: #FFFFFF;
    fontSize: 75;
    marginTop: 120;
    marginBottom: 120;
    fontFamily: "BMJUA_ttf";
`
const SignUpLogo = styled.Text`
    color: #FFFFFF;
    fontSize: 75;
    marginTop: 120;
    marginBottom: 36;
    fontFamily: "BMJUA_ttf";
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
const SignUpBtn = styled.Text`
    color: #FFFFFF;
    marginTop: 10;
    textDecorationLine: underline;
`
const ToLoginBtn =  styled(Button)`
    background:#FFFFFF;
    width:80%;
    marginTop: 50;
    marginLeft: 10%;
    marginRight: 10%;
    borderRadius: 50;
`
const ToLoginText = styled(H3)`
    color : #4586C6;
    width:100%;
    fontSize: 18;
    textAlign:center;
`
const ToSignUpBtn =  styled(Button)`
    background:#4586C6;
    width:80%;
    marginTop: 10;
    marginLeft: 10%;
    marginRight: 10%;
    borderRadius: 50;
`
const ToSignUpText = styled(H3)`
    color : #FFFFFF;
    width:100%;
    fontSize: 18;
    textAlign:center;
`

type Props = {};

export default class Login extends Component<Props> {
    constructor(props: Props) { 
        super(props); 
        this.state = { 
            email: null,
            password: null,
            toggleLogin: true,
        }
        this.toggleLogin = this.toggleLogin.bind(this)
    }
    onChange(){

    }
    toggleLogin(){
        this.setState({
            toggleLogin: !this.state.toggleLogin
        })
    }
    signIn(){
        // 로그인 API -> JWT 토큰!
        
        // 로그인 성공시
        AsyncStorage.setItem('token', "test-token")
        Actions.home({ isLogined : true })
        // 로그인 실패시
        // Alert.alert(
        //     '일림',
        //     '로그인에 실패했습니다.',
        //     [
        //         {text: '확인', onPress: () => console.log("확인")},
        //     ]
        // )
    }
    signUp(){
        // 비밀번호 Validation
        // 회원가입 API -> JWT 토큰!
        // 회원가입 성공시
        AsyncStorage.setItem('token', "test-token")
        Actions.home({ isLogined : true })
        // 회원가입 실패시
        // Alert.alert(
        //     '일림',
        //     '로그인에 실패했습니다.',
        //     [
        //         {text: '확인', onPress: () => console.log("확인")},
        //     ]
        // )
    }
    render() {
        return (
            <Container>
                <BackgourndImg imageStyle={{ opacity:0.5}} source={require('../Images/LoginBg.jpg')}>
                    <Grid>
                        <Row style={{justifyContent:"flex-end", width:"100%", height: 50}}>
                            <CloseBtn transparent onPress={Actions.pop}>
                                <CloseIcon name="close"/>
                            </CloseBtn>
                        </Row>
                    </Grid>
                    
                        {
                            this.state.toggleLogin
                            ? (
                                <LogoContainer>
                                    <Logo>무비너스</Logo>
                                    <InputWrapper rounded>
                                        <InputBox returnKeyType='next' placeholder='이메일'/>
                                    </InputWrapper>
                                    <InputWrapper rounded>
                                        <InputBox secureTextEntry placeholder='비밀번호'/>
                                    </InputWrapper>
                                    <LoginBtn transparent onPress={this.signIn}>
                                        <LoginText>로그인</LoginText>
                                    </LoginBtn>
                                    <SignUpBtn onPress={this.toggleLogin}>아직 무비너스 회원이 아니신가요?</SignUpBtn>
                                </LogoContainer>
                            )
                            : (
                                <LogoContainer>
                                    <SignUpLogo>무비너스</SignUpLogo>
                                    <InputWrapper rounded>
                                        <InputBox returnKeyType='next' placeholder='이메일'/>
                                    </InputWrapper>
                                    <InputWrapper rounded>
                                        <InputBox returnKeyType='next' secureTextEntry placeholder='비밀번호'/>
                                    </InputWrapper>
                                    <InputWrapper rounded>
                                        <InputBox secureTextEntry placeholder='비밀번호 확인'/>
                                    </InputWrapper>
                                    <ToLoginBtn transparent onPress={this.toggleLogin}>
                                        <ToLoginText>로그인 하러가기</ToLoginText>
                                    </ToLoginBtn>
                                    <ToSignUpBtn transparent onPress={this.kakaoLogin}>
                                        <ToSignUpText>회원가입</ToSignUpText>
                                    </ToSignUpBtn>
                                </LogoContainer>
                            )
                        }
                </BackgourndImg>
            </Container>
        )
    }
}
