import React, {Component} from 'react'
import {AsyncStorage, Text, View} from 'react-native'
import { Container, Icon, Item, Input, Content, List, ListItem, Left, Body, Right, Thumbnail, Button }  from 'native-base'
import styled from 'styled-components/native'
import { Actions } from 'react-native-router-flux'

// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'
import SearchItemComponent from '../Components/SearchItem'
import ReadyToSearchComponent from '../Components/ReadyToSearch'

type Props = {};

const SearchBar = styled(Item)`
    paddingLeft : 20;
    paddingRight : 20;
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
                        <SearchItemComponent
                            title="뺑반"
                            thumbnail="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg"
                            rate={7.2}
                            description="경찰 내 최고 엘리트 조직 내사과 소속 경위 ‘은시연’(공효진). 
                            조직에서 유일하게 믿고 따르는 ‘윤과장’(염정아)과 함께 
                            F1 레이서 출신의 사업가 ‘정재철’(조정석)을 잡기 위해 수사망을 조여가던 시연은 
                            무리한 강압 수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다. "
                        />
                    </List>
                </Content>
            </Container>
        )
    }
}
