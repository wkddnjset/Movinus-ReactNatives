import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import { Container, Content, Button }  from 'native-base'
import { Actions } from 'react-native-router-flux'
import styled from 'styled-components/native'

// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'
import CarouselComponent from '../Components/Carousel'


const CarouselTitle = styled(Text)`
    fontSize: 25;
    fontWeight: 800;
    marginLeft: 15;
    marginTop: 20;
    color: #182433;
`

type Props = {};

export default class Home extends Component<Props> {
    render() {
        return (
            <Container style={{backgroundColor: "#FFF"}}>
                <DrawerHeaderComponent/>
                <Content>
                    <CarouselTitle>일간 박스오피스</CarouselTitle>
                    <CarouselComponent/>
                    <CarouselTitle>액션</CarouselTitle>
                    <CarouselComponent/>
                    <CarouselTitle>드라마</CarouselTitle>
                    <CarouselComponent/>
                </Content>
            </Container>
        )
    }
}
