import React, {Component} from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { Rating } from 'react-native-ratings'
import { Container, Icon, Button, Thumbnail }  from 'native-base'
import styled from 'styled-components/native'
import Spinner from 'react-native-loading-spinner-overlay'
import { Col, Row, Grid } from 'react-native-easy-grid'
import axios from 'axios'

// Components
import HeaderComponent from '../Components/Header'
import { Actions } from 'react-native-router-flux'

const BackgourndImg = styled(ImageBackground)`
    width:100%;
    height: 160;
    backgroundColor: #182433;
`
const MovieThumbnail = styled(Thumbnail)`
    width:120;
    height: 170;
`
const MovieTitle = styled(Text)`
    fontSize: 20;
    fontWeight: 600;
`
const MovieSubTitle = styled(Text)`
    fontSize: 17;
`
const MovieInfo = styled(Text)`

`
const RatingView = styled.View`
    flexDirection: row;
    alignItems: center;
    marginTop: 5;
    marginBottom: 5;
`
const RateText = styled.Text`
    marginLeft: 5;
    fontSize:15;
    color:#555555;
`
type Props = {};

export default class DetailMy extends Component<Props> {
    constructor (props) {
        super(props)

        this.state = {
            data : {
                genres: [],
                nations: []
            },
            loading: true,
            thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
            title: "뺑반",
            rate: 7.2,
            subTitle: "Hit-and-Run Squad",
            showTm: 133,
            prdtYear: "2018",
            openDt:"2019.01.30",
            genres: ['범죄', '액션'],
            nations: ['한국'],
            audits:"15세이상관람가",
            description: "경찰 내 최고 엘리트 조직 내사과 소속 경위 ‘은시연’(공효진). 조직에서 유일하게 믿고 따르는 ‘윤과장’(염정아)과 함께 F1 레이서 출신의 사업가 ‘정재철’(조정석)을 잡기 위해 수사망을 조여가던 시연은 무리한 강압 수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다."
        }
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=d1bad0612955f9a34614bc14dda70291&language=ko-KR`)
            .then(res => {
                console.log(res.data)
                const data = {
                    id: res.data.id,
                    title: res.data.title,
                    subTitle: res.data.original_title,
                    rate: this.props.rate,
                    genres: res.data.genres,
                    openDt: res.data.release_date,
                    prdtYear: res.data.release_date.slice(0, 4),
                    showTm: res.data.runtime,
                    bg:  "https://image.tmdb.org/t/p/w500" + res.data.backdrop_path,
                    nations: [],
                    thumbnail: "https://image.tmdb.org/t/p/w500" + res.data.poster_path
                }
                this.setState({
                    data: data,
                    loading: false
                })
        })
    }
    render() {
        console.log(this.state.data)
        if (this.state.loading){
            return (
                <Spinner
                    visible={true}
                    textContent={'로딩중...'}
                    textStyle={{color:"#FFF"}}
                />
            )
        }
        else{
            return (
                <Container>
                    <BackgourndImg imageStyle={{ opacity:0.8 }} source={{ uri : this.state.data.bg }}>
                        <HeaderComponent
                        navColor="#FFFFFF00"
                        navBarLeft={(
                            <Button transparent onPress={Actions.pop}>
                                <Icon name="arrow-back" style={{color:"#FFF", fontSize:30}}/>
                            </Button>
                        )}
                        />
                    </BackgourndImg>
                    <Grid style={{flex:1, marginTop: -60 }}>
                        <Row>
                            <Col style={{ flex:2, justifyContent: "flex-end", alignItems:"center" }}>
                                <MovieThumbnail square source={{ uri: this.state.data.thumbnail }} />
                            </Col>
                            <Col style={{ flex:3, justifyContent: "flex-end" }}>
                                <MovieTitle>{this.state.data.title}</MovieTitle>
                                <MovieSubTitle>({this.state.data.subTitle}, {this.state.data.prdtYear})</MovieSubTitle>
                                <RatingView>
                                    <RateText>내 평점({this.state.data.rate}.0) </RateText>
                                    <Rating
                                        readonly
                                        ratingCount={5}
                                        startingValue={this.state.data.rate}
                                        imageSize={17}
                                        style={{ alignItems:"flex-start" }}
                                    />
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
                                    <Text>{this.state.data.showTm}분 | </Text>
                                    <Text> | {this.state.data.openDt} 개봉 |</Text>
                                </MovieInfo>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid style={{flex:2}}>
    
                    </Grid>
                </Container>
            )
        }
    }
}
