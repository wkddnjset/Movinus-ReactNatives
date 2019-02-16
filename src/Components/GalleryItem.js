import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image, Dimensions } from 'react-native'
import { Rating } from 'react-native-ratings'
import { FlatGrid } from 'react-native-super-grid'
import styled from 'styled-components/native'

const ReviewTitle = styled(Text)`
    marginTop: 5;
    fontSize: 19;
`
const ReviewText = styled(Text)`
    marginTop: 5;
    marginBottom: 10;
    fontSize: 14;
`
const RatingView = styled.View`
    flexDirection: row;
    alignItems: center;
`
const RateText = styled.Text`
    marginLeft: 5;
    fontSize:15;
    color:#555555;
`

export default class GalleryItemComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            windowWidth: Dimensions.get('window').width,
            windowHeight: Dimensions.get('window').height,
            entries: [
                {
                    title: "뺑반1",
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
    _renderItem ({item, index}) {
        return (
            <TouchableOpacity onPress={() => {console.log("dd")}}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{ width: (this.state.windowWidth/2)-20, height:this.state.windowHeight/2.5, borderRadius:8 }}
                />
                <ReviewTitle numberOfLines={1}>
                    { item.title }
                </ReviewTitle>
                <RatingView>
                    <Rating
                        readonly
                        ratingCount={5}
                        startingValue={item.rate/2}
                        imageSize={17}
                        style={{ alignItems:"flex-start" }}
                    />
                    <RateText>{item.rate}</RateText>
                </RatingView>
                <ReviewText numberOfLines={2}>
                    { item.text }
                </ReviewText>
                
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <FlatGrid
                itemDimension={130}
                items={this.state.entries}
                style={{ flex:1 }}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={this._renderItem}
            />
        )
    }
}