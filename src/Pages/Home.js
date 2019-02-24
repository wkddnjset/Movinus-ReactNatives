import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native'
import { Container, Content, Button }  from 'native-base'
import { Actions } from 'react-native-router-flux'
import styled from 'styled-components/native'
import axios from 'axios'

// Components
import DrawerHeaderComponent from '../Components/DrawerHeader'
import CarouselComponent from '../Components/Carousel'
// Utils
import { getGenre } from '../Utils/Genre'

const CarouselTitle = styled(Text)`
    fontSize: 25;
    fontWeight: 800;
    marginLeft: 15;
    marginTop: 20;
    color: #182433;
`

type Props = {};

export default class Home extends Component<Props> {
    
    constructor (props) {
        super(props)

        this.state = {
            // loading: false,
            nowPlayingList: [{genres:[], nations:[]}],
        }
    }
    componentWillMount() {
        this.setState({
            loading: true
        })
    }
    componentDidMount() {
        // if (this.state.nowPlayingList.length == 1 ){
        //     console.log("API 콜 안함")
        // }
        // else{
        //     axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d1bad0612955f9a34614bc14dda70291&language=ko-KR&page=1&region=kr`)
        //         .then(res => {
        //             const nowPlayingList = []
        //             const results = res.data.results
        //             for (var result of results){
        //                 const genreList = []
        //                 for (var genre_id of result.genre_ids.slice(0, 3)){
        //                     genreList.push(getGenre(genre_id))
        //                 }
        //                 const data = {
        //                     id: result.id,
        //                     title: result.title,
        //                     rate: result.vote_average,
        //                     genres: genreList,
        //                     nations: [],
        //                     thumbnail: "https://image.tmdb.org/t/p/w500" + result.poster_path
        //                 }
        //                 nowPlayingList.push(data)
        //             }
        //             setInterval(() => {
        //                 this.setState({
        //                     nowPlayingList: nowPlayingList,
        //                     loading: false
        //                 })
        //             }, 100)
        //     })
        // }
    }
    render() {
        return (
            <Container style={{backgroundColor: "#FFF"}}>
                <DrawerHeaderComponent/>
                <Content>
                    <CarouselTitle>현재상영영화</CarouselTitle>
                    <CarouselComponent data={this.state.nowPlayingList}/>
                    <CarouselTitle>액션</CarouselTitle>
                    <CarouselComponent data={this.state.nowPlayingList}/>
                    <CarouselTitle>드라마</CarouselTitle>
                    <CarouselComponent data={this.state.nowPlayingList}/>
                </Content>
            </Container>
        )
    }
}
