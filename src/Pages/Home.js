import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import { Container, Icon, Button }  from 'native-base'
import { Actions } from 'react-native-router-flux'
// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <Container>
                <DrawerHeaderComponent/>
                <Text>홈페이지 입니다.</Text>
            </Container>
        )
    }
}
