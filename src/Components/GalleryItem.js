import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, Dimensions } from 'react-native'
import { Rating } from 'react-native-ratings'
import { FlatGrid } from 'react-native-super-grid'
import styled from 'styled-components/native'
import { Icon } from 'native-base';

// Conponents
import ReadyToSearchComponent from '../Components/ReadyToSearch'
import { Actions } from 'react-native-router-flux';

const ReviewTitle = styled(Text)`
    fontWeight: 600;
    marginTop: 10;
    fontSize: 18;
`
const ReviewText = styled(Text)`
    marginTop: 5;
    marginBottom: 10;
    fontSize: 14;
`
const RatingView = styled.View`
    marginTop: 10;
    flexDirection: row;
    alignItems: center;
`
const RateText = styled.Text`
    fontSize:15;
    color:#555555;
`

export default class GalleryItemComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            windowWidth: Dimensions.get('window').width,
            windowHeight: Dimensions.get('window').height,
            data:[
                {
                    title: "뺑반1뺑반1뺑반1뺑반1뺑반1뺑반1뺑반1",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                    rate: 7.2,
                    text: "세상에서 제일 재미없는 이야기 뺑반, 이 이상의 노잼은 없다. 다신 보지말아야겠어"
                },
                {
                    title: "뺑반2",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                    rate: 7.2,
                    text: "세상에서 제일 재미없는 이야기 뺑반, 이 이상의 노잼은 없다. 다신 보지말아야겠어"                
                },
                {
                    title: "뺑반3",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                    rate: 7.2,
                    text: "세상에서 제일 재미없는 이야기 뺑반, 이 이상의 노잼은 없다. 다신 보지말아야겠어"                
                },
                {
                    title: "뺑반4",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                    rate: 7.2,
                    text: "세상에서 제일 재미없는 이야기 뺑반, 이 이상의 노잼은 없다. 다신 보지말아야겠어"                
                },
                {
                    title: "뺑반5",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                    rate: 7.2,
                    text: "세상에서 제일 재미없는 이야기 뺑반, 이 이상의 노잼은 없다. 다신 보지말아야겠어"                
                },
                {
                    title: "뺑반6",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                    rate: 7.2,
                    text: "세상에서 제일 재미없는 이야기 뺑반, 이 이상의 노잼은 없다. 다신 보지말아야겠어"                
                },
            ],
        }
        this._renderItem = this._renderItem.bind(this)
    }
    toDetail(){
        Actions.detail_my()
    }
    _renderItem ({item, index}) {
        return (
            <TouchableOpacity onPress={this.toDetail}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{ width: (this.state.windowWidth/2)-20, height:this.state.windowHeight/2.5, borderRadius:8 }}
                />
                <ReviewTitle numberOfLines={1}>
                    { item.title }
                </ReviewTitle>
                <RatingView>
                    <RateText>내 평점  </RateText>
                    <Rating
                        readonly
                        ratingCount={5}
                        startingValue={item.rate/2}
                        imageSize={17}
                        style={{ alignItems:"flex-start" }}
                    />
                    <RateText>  {item.rate}</RateText>
                </RatingView>
                <ReviewText numberOfLines={2}>
                    { item.text }
                </ReviewText>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <FlatGrid
                itemDimension={130}
                items={this.state.data}
                style={{ flex:1 }}
                spacing={10}
                renderItem={this._renderItem} 
            />
        )
    }
    // render() {
    //     if(this.props.status == null){
    //         return(
    //             <FlatGrid
    //                 itemDimension={130}
    //                 items={this.state.data}
    //                 style={{ flex:1 }}
    //                 spacing={10}
    //                 renderItem={this._renderItem} 
    //             />
    //         )
    //     }
    //     else if (this.props.status == "Error"){
    //         return (
    //             <ReadyToSearchComponent/>
    //         )
    //     }
    //     else {
    //         return (
    //             <FlatGrid
    //                 itemDimension={130}
    //                 items={this.props.data}
    //                 style={{ flex:1 }}
    //                 spacing={10}
    //                 renderItem={this._renderItem} 
    //             />
    //         )
    //     }
    // }
}