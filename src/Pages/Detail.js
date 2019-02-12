import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Container, Icon, Button }  from 'native-base'
// Components
import HeaderComponent from '../Components/Header'
import { Actions } from 'react-native-router-flux';

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <Container>
                <HeaderComponent
                    navBarLeft={(
                        <Button transparent onPress={Actions.pop}>
                            <Icon name="back" style={{color:"#000"}}/>
                        </Button>
                    )}
                />
                <Text>상세 페이지 입니다.</Text>
            </Container>
        )
    }
}
