import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import { Container, Icon, Button }  from 'native-base'
import { Actions } from 'react-native-router-flux'
// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'
import GalleryItemComponent from '../Components/GalleryItem'

type Props = {};

export default class MyList extends Component<Props> {
    render() {
        return (
            <Container>
                <DrawerHeaderComponent/>
                <GalleryItemComponent/>
            </Container>
        )
    }
}
