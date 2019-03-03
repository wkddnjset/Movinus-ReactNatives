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
        }
        this._renderItem = this._renderItem.bind(this)
    }
    toDetail(id, rate, title, review){
        Actions.detail_my({
            id: id,
            rate: rate, 
            title: title, 
            review: review
        })
    }
    _renderItem ({item, index}) {
        return (
            <TouchableOpacity onPress={() => this.toDetail(item.id, item.rate, item.title, item.review)}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{ width: (this.state.windowWidth/2)-20, height:this.state.windowHeight/2.5, borderRadius:8 }}
                />
                <ReviewTitle numberOfLines={1}>
                    { item.title }
                </ReviewTitle>
                <RatingView>
                    <RateText>내 평점({item.rate}.0) </RateText>
                    <Rating
                        readonly
                        ratingCount={5}
                        startingValue={item.rate}
                        imageSize={17}
                        style={{ alignItems:"flex-start" }}
                    />
                </RatingView>
                <ReviewText numberOfLines={2}>
                    { item.review }
                </ReviewText>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <FlatGrid
                itemDimension={130}
                items={this.props.data}
                style={{ flex:1 }}
                spacing={10}
                renderItem={this._renderItem} 
            />
        )
    }
}