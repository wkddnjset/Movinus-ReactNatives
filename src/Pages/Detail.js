import React, {Component} from 'react'
import { Text, View, ImageBackground, Alert, Keyboard } from 'react-native'
import { Container, Icon, Button, Thumbnail }  from 'native-base'
import { Rating } from 'react-native-ratings'
import styled from 'styled-components/native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import ActionButton from 'react-native-action-button'
import Spinner from 'react-native-loading-spinner-overlay'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { openDatabase } from 'react-native-sqlite-storage'

// Components
import HeaderComponent from '../Components/Header'
import AddItemModalComponent from '../Components/AddItemModal'

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

var db = openDatabase({name: 'test.db', createFromLocation:'~db/database.db'} )

export default class Detail extends Component<Props> {
    constructor (props) {
        super(props)

        this.state = {
            isModalVisible:false,
            isDateTimePickerVisible: false,
            selectedDate: null,
            loading: true,
            rate: null,
            rateView:"별점을 선택해주세요",
            title: null,
            review: null,
            data : {
                genres: [],
                nations: []
            }
        }
        this._toggleModal = this._toggleModal.bind(this)
        this._showDateTimePicker = this._showDateTimePicker.bind(this)
        this._hideDateTimePicker = this._hideDateTimePicker.bind(this)
        this._handleDatePicked = this._handleDatePicked.bind(this)
        this._updateItem = this._updateItem.bind(this)
        this._changeTitle = this._changeTitle.bind(this)
        this._changeReview = this._changeReview.bind(this)
        this._onFinishRating = this._onFinishRating.bind(this)
    }
    _changeTitle(text){
        this.setState({
            title: text
        })
    }
    _changeReview(text){
        this.setState({
            review: text
        })
    }
    _onFinishRating(number){
        var rateView = ""
        switch (number){
            case 1:
                rateView = "세상에 둘도없는 노잼ㅠㅠ"
                break 
            case 2:
                rateView = "내가 헛것을 봤나.."
                break 
            case 3:
                rateView = "킬링타임 대마왕"
                break 
            case 4:
                rateView = "두번볼 가치가 있다!"
                break 
            case 5:
                rateView = "인생영화 드디어 발견!"
                break 
        }
        this.setState({
            rateView: rateView,
            rate: number
        })
    }
    _toggleModal(){
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            rate: null,
            title: null,
            review: null,
            selectedDate: null,
            rateView:"별점을 선택해주세요",
        })
    }
    _showDateTimePicker(){
        Keyboard.dismiss()
        this.setState({ isDateTimePickerVisible: true })
    }
    _hideDateTimePicker(){
        this.setState({ isDateTimePickerVisible: false })
    }
    _handleDatePicked(date){
        const d = date
        this.setState({
            selectedDate: d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일"
        })
        this._hideDateTimePicker()
    }
    _updateItem(title, review, rate){
        const id = parseInt(this.state.data.id)
        const thumbnail = this.state.data.thumbnail
        const date = this.state.selectedDate
        if (title == null || review == null || date ==null || rate == null){
            Alert.alert(
                "알림",
                "빈칸을 채워주세요",
                [
                    {text: '확인'},
                ]
            )
        }
        else{
            
            db.transaction((tx) => {
                tx.executeSql(`
                    INSERT INTO MyList ( id, rate, review, title, created_at, thumbnail ) 
                    VALUES 
                    ( ?, ?, ?, ?, ?, ? );`, 
                    [id, parseInt(rate), review, title, date, thumbnail], (tx, results) => {
                        this._toggleModal()
                    }, err => {
                        console.log(err)
                        if (err.code == 0 ){
                            var message = "이미 등록된 리뷰입니다."
                        }
                        else{ var message = err.message }
                        Alert.alert(
                            "알림",
                            message,
                            [
                                {text: '확인', onPress:() => this._toggleModal()},
                            ]
                        )
                    })
            })
        }
    }
    componentDidMount() {
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
                })
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
                                                startingValue={this.state.data.rate/2}
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
                        buttonColor="rgba(69, 134, 198, 0.8)"
                        offsetX={20}
                        offsetY={20}
                        onPress={this._toggleModal}
                    />
                    <AddItemModalComponent
                        isModalVisible={this.state.isModalVisible}
                        selectedDate={this.state.selectedDate}
                        _showDateTimePicker={this._showDateTimePicker}
                        _toggleModal={this._toggleModal}
                        _updateItem={this._updateItem}
                        _changeTitle={this._changeTitle}
                        _changeReview={this._changeReview}
                        _onFinishRating={this._onFinishRating}
                        rateView = {this.state.rateView}
                        rate = {this.state.rate}
                        title = {this.state.title}
                        review = {this.state.review}
                    />
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                </BackgourndImg>
            </Container>
        )
    }
}
