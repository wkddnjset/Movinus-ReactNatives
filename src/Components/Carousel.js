import React, {Component} from 'react'
import { Text, View, Image, Dimensions  } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import styled from 'styled-components/native'

export default class MyCarousel extends Component {
    constructor (props) {
        super(props)

        this.state = {
            entries: [
                {
                    title: "뺑반1",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg"
                },
                {
                    title: "뺑반2",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg"
                },
                {
                    title: "뺑반3",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg"
                },
                {
                    title: "뺑반4",
                    thumbnail: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg"
                },
            ]
        }
    }
    _renderItem ({item, index}, parallaxProps) {
        return (
            <View>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{width:180, height:250, borderRadius:8}}
                />
                <Text numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        )
    }

    render () {
        var {height, width} = Dimensions.get('window');
        return (
            <Carousel
                slideStyle={{marginTop:20}}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                sliderWidth={width}
                itemWidth={width/2.2}
            />
        )
    }
}