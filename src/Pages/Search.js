import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import { Container, Icon, Item, Input, Content, List, ListItem, Left, Body, Right, Thumbnail, Button }  from 'native-base'
import styled from 'styled-components/native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux'
// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'

type Props = {};

const SearchBar = styled(Item)`
    paddingLeft : 20;
    paddingRight : 20;
`
const MovieThumbnail = styled(Thumbnail)`
    width:100;
    height: 140;
    borderRadius: 8;
`
const MovieTitle = styled(Text)`
    fontSize: 20;
`
export default class Search extends Component<Props> {
    render() {
        return (
            <Container>
                <DrawerHeaderComponent/>
                <SearchBar>
                    <Input placeholder='검색어를 입력해주세요'/>
                    <Icon active name='search' />
                </SearchBar>
                <Content>
                    <List>
                        <ListItem Thumbnail>
                            <Grid>
                                <Row>
                                    <Col style={{flex:1}}>
                                        <MovieThumbnail square source={{ uri: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg' }} />
                                    </Col>
                                    <Col style={{flex:2}}>
                                        <MovieTitle>뺑반</MovieTitle>
                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </ListItem>
                        <ListItem Thumbnail>
                            <Grid>
                                <Row>
                                    <Col style={{flex:1}}>
                                        <MovieThumbnail square source={{ uri: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg' }} />
                                    </Col>
                                    <Col style={{flex:2}}>
                                        <MovieTitle>뺑반</MovieTitle>
                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}
