import React, {Component} from 'react'
import {AsyncStorage, Text, View} from 'react-native'
import { Container, Icon, Item, Input, Content, List, ListItem, Left, Body, Right, Thumbnail, Button }  from 'native-base'
import styled from 'styled-components/native'
import { Actions } from 'react-native-router-flux'

// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'
import SearchItemComponent from '../Components/SearchItem'
import SearchListComponent from '../Components/SearchList'
import ReadyToSearchComponent from '../Components/ReadyToSearch'
// Contexts
import { SeacrhProvider, SeacrhConsumer } from '../Contexts/Search'

type Props = {};

const SearchBar = styled(Item)`
    paddingLeft : 20;
    paddingRight : 20;
`
export default class Search extends Component<Props> {
    constructor (props) {
        super(props)

        this.state = {
            page: 1,
        }
    }
    render() {
        return (
            <Container>
                <DrawerHeaderComponent/>
                <SeacrhProvider>
                <SeacrhConsumer>
                        {
                            (SeacrhContext) => (
                                <SearchBar>
                                    <Input 
                                        placeholder='검색어를 입력해주세요' 
                                        onChangeText={(text) => SeacrhContext.actions.search(text, this.state.page)}/>
                                    <Icon active name='search'/>
                                </SearchBar>
                            )
                        }
                    </SeacrhConsumer>
                    <SeacrhConsumer>
                        {
                            (SeacrhContext) => (
                                <SearchListComponent
                                    data={SeacrhContext.state.data}
                                    status={SeacrhContext.state.status}/>
                            )
                        }
                    </SeacrhConsumer>
                </SeacrhProvider>
            </Container>
        )
    }
}
