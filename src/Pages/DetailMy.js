import React, {Component} from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { Rating } from 'react-native-ratings'
import { Container, Icon, Button, Thumbnail }  from 'native-base'
import styled from 'styled-components/native'
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
const DescriptionText = styled.Text`
    marginTop: 10;
`
type Props = {};

export default class DetailMy extends Component<Props> {
    constructor (props) {
        super(props)

        this.state = {
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
    render() {
        return (
            <Container>
                <BackgourndImg imageStyle={{ opacity:0.5 }} source={{ uri : this.state.thumbnail }}>
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
                            <MovieThumbnail square source={{ uri: this.state.thumbnail }} />
                        </Col>
                        <Col style={{ flex:3, justifyContent: "flex-end" }}>
                            <MovieTitle>{this.state.title}</MovieTitle>
                            <MovieSubTitle>({this.state.subTitle}, {this.state.prdtYear})</MovieSubTitle>
                            <RatingView>
                                <Rating
                                    readonly
                                    ratingCount={5}
                                    startingValue={this.state.rate}
                                    imageSize={17}
                                    style={{ alignItems:"flex-start" }}
                                />
                                <RateText>{this.state.rate}</RateText>
                            </RatingView>
                            <MovieInfo>
                                {
                                    this.state.genres.map((genre, index) => {
                                        if(this.state.genres.length === index + 1){
                                            return <Text key={index}>{genre}</Text>
                                        }
                                        else{
                                            return <Text key={index}>{genre}, </Text>
                                        }
                                    })
                                }
                                <Text> | {this.state.openDt} 개봉 |</Text>
                            </MovieInfo>
                            <MovieInfo>
                                <Text>{this.state.showTm}분 | </Text>
                                {
                                    this.state.nations.map((nation, index) => {
                                        if(this.state.nations.length === index + 1){
                                            return <Text key={index}>{nation}</Text>
                                        }
                                        else{
                                            return <Text key={index}>{nation}, </Text>
                                        }
                                    })
                                }
                                <Text> | {this.state.audits}</Text>
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
