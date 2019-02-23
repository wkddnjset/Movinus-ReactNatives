import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import styled from 'styled-components/native'
import { Container, Icon, Button, Content, Item, Input, Header }  from 'native-base'
import { Actions } from 'react-native-router-flux'
// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'
import HeaderComponent from '../Components/Header'
import GalleryItemComponent from '../Components/GalleryItem'

type Props = {};

const MyListBtn = styled.Text`
    color: #182433;
    alignSelf: center;
    justifyContent: center;
    marginTop:5;
    fontSize: 19;
    fontFamily: BMJUA_ttf;
`
const SearchBar = styled(Item)`
    paddingLeft : 20;
    paddingRight : 20;
`
export default class MyList extends Component<Props> {
    constructor (props) {
        super(props)

        this.state = {
            loading: false,
            data: [],
            current_page: 1,
            hasMore: true
        }
    }
    onValueChange(value){
        this.setState({
            selected: value
        })
    }
    render() {
        return (
            <Container>
                <DrawerHeaderComponent/>
                {/* <HeaderComponent
                navColor="#FFFFFF"
                navBarLeft={(
                    <Button transparent onPress={this.openUser}>
                        <Icon type="MaterialCommunityIcons" name="filter-outline" style={{color:"#182433", fontSize:30}}/>
                        <MyListBtn>필터</MyListBtn>
                    </Button>
                )}
                navBarRight={(
                    <Button transparent onPress={this.openUser}>
                        <MyListBtn>정렬</MyListBtn>
                        <Icon type="MaterialCommunityIcons" name="sort-descending" style={{color:"#182433", fontSize:30}}/>
                    </Button>
                )}
                /> */}
                <SearchBar>
                    <Input placeholder='검색어를 입력해주세요'/>
                    <Icon active name='search' />
                </SearchBar>
                <GalleryItemComponent data={this.state.data}/>
            </Container>
        )
    }
}
