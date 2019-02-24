import React, {Component} from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { Container, Icon, Button, Thumbnail }  from 'native-base'
import { Rating } from 'react-native-ratings'
import styled from 'styled-components/native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import ActionButton from 'react-native-action-button'
import Spinner from 'react-native-loading-spinner-overlay'

// Components
import HeaderComponent from '../Components/Header'
import SearchItemComponent from '../Components/SearchItem'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

const BackgourndImg = styled(ImageBackground)`
    width:100%;
    height: 100%;
    backgroundColor: #182433;
`
const MovieThumbnail = styled(Thumbnail)`
    width:120;
    height: 170;
`
const MovieTitle = styled(Text)`
    color: #FFFFFF;
    fontSize: 20;
    fontWeight: 600;
`
const MovieSubTitle = styled(Text)`
    color: #FFFFFF;
    fontSize: 17;
`
const MovieInfo = styled(Text)`
    color: #FFFFFF;
`
const RatingView = styled.View`
    backgroundColor: #FFFFFF00;
    flexDirection: row;
    alignItems: center;
    marginTop: 5;
    marginBottom: 5;
`
const RateText = styled.Text`
    marginLeft: 5;
    fontSize:15;
    color:#FFFFFF;
`
type Props = {};

export default class Detail extends Component<Props> {
    constructor (props) {
        super(props)

        this.state = {
            loading: false,
            data : {
                genres: [],
                nations: []
            }
        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=d1bad0612955f9a34614bc14dda70291&language=ko-KR`)
            .then(res => {
                const data = {
                    id: res.data.id,
                    title: res.data.title,
                    subTitle: res.data.original_title,
                    rate: res.data.vote_average,
                    genres: res.data.genres,
                    openDt: res.data.release_date,
                    prdtYear: res.data.release_date.slice(0, 4),
                    showTm: res.data.runtime,
                    nations: [],
                    thumbnail: "https://image.tmdb.org/t/p/w500" + res.data.poster_path
                }
                this.setState({
                    data: data,
                    loading: false
                });
        })
    }
    render() {
        return (
            <Container>
                <BackgourndImg blurRadius={2} imageStyle={{ opacity:0.3}} source={{ uri : this.state.data.thumbnail }}>
                    <HeaderComponent
                    navColor="#FFFFFF00"
                    navBarLeft={(
                        <Button transparent onPress={Actions.pop}>
                            <Icon name="arrow-back" style={{color:"#FFF", fontSize:30}}/>
                        </Button>
                    )}
                    />
                    <Spinner
                        visible={this.state.loading}
                        textContent={'로딩중...'}
                        textStyle={{color:"#FFF"}}
                    />
                    {
                        this.state.loading
                        ? null
                        : (
                            <Grid>
                                <Row style={{ flex:1 }}>
                                    <Col style={{ flex:2, justifyContent: "flex-end", alignItems:"center" }}>
                                        <MovieThumbnail square source={{ uri: this.state.data.thumbnail }} />
                                    </Col>
                                    <Col style={{ flex:3, justifyContent: "flex-end" }}>
                                        <MovieTitle>{this.state.data.title}</MovieTitle>
                                        <MovieSubTitle>({this.state.data.subTitle}, {this.state.data.prdtYear})</MovieSubTitle>
                                        <RatingView>
                                            <Rating
                                                readonly
                                                ratingCount={5}
                                                startingValue={this.state.rate/2}
                                                imageSize={17}
                                                tintColor='#182433'
                                                style={{ alignItems:"flex-start" }}
                                            />
                                            <RateText>{this.state.data.rate}</RateText>
                                        </RatingView>
                                        <MovieInfo>
                                            {
                                                this.state.data.genres.map((genre, index) => {
                                                    if(this.state.data.genres.length === index + 1){
                                                        return <Text key={index}>{genre.name}</Text>
                                                    }
                                                    else{
                                                        return <Text key={index}>{genre.name}, </Text>
                                                    }
                                                })
                                            }
                                        </MovieInfo>
                                        <MovieInfo>
                                            <Text>{this.state.data.openDt} 개봉 | {this.state.data.showTm}분</Text>
                                        </MovieInfo>
                                    </Col>
                                </Row>
                                <Row style={{ flex:2 }}>

                                </Row>
                            </Grid>
                        )
                    }
                    <ActionButton
                        buttonColor="#4586C6"
                        onPress={() => { console.log("hi")}}
                    />
                </BackgourndImg>
            </Container>
        )
    }
}
