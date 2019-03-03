import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import styled from 'styled-components/native'
import { Container, Icon, Button, Content, Item, Input, Header }  from 'native-base'
import { Actions } from 'react-native-router-flux'
import { openDatabase } from 'react-native-sqlite-storage'

// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'
import HeaderComponent from '../Components/Header'
import GalleryItemComponent from '../Components/GalleryItem'
// Contexts
import { SeacrhProvider, SeacrhConsumer } from '../Contexts/Search'

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

var db = openDatabase({name: 'ver0.1_test.db', createFromLocation:'~db/database.db'})

export default class MyList extends Component<Props> {
    constructor (props) {
        super(props)

        this.state = {
            loading: false,
            data: [],
            current_page: 1,
            hasMore: true,
            MyList: []
        }
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM MyList', [], (tx, results) => {
                var len = results.rows.length
                var MyList = []
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  MyList.push(row)
                }
                console.log(MyList)
                this.setState({
                    MyList: MyList
                })
            })
        })
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
                <GalleryItemComponent 
                    data={this.state.MyList}/>
            </Container>
        )
    }
}
