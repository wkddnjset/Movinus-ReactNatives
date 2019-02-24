import React, {Component} from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity  } from 'react-native'
import { Icon }  from 'native-base'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import { Rating } from 'react-native-ratings'
import styled from 'styled-components/native'
import { Actions } from 'react-native-router-flux';

const MovieTitle = styled(Text)`
    fontSize: 19;
    fontWeight: 600;
`
const MovieInfo = styled(Text)`
    fontSize: 13;
`
const RatingView = styled.View`
    flexDirection: row;
    alignItems: center;
    marginTop: 5;
`
const RateText = styled.Text`
    marginLeft: 5;
    fontSize:15;
    color:#555555;
`
const SearchView = styled.TouchableOpacity`
    width: 145;
    height:230;
    borderRadius:8;
    borderWidth:1;
    borderColor: #555;
    justifyContent: center;
    alignItems: center;
`
const SearchText = styled.Text`
    marginRight: 5;
    fontSize:18;
    color:#555555;
`

export default class CarouselComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            windowWidth: Dimensions.get('window').width,
            search: {
                    title: "검색하기",
                }

        }
        this._renderItem = this._renderItem.bind(this)
    }
    toDetail(id){
        console.log(id)
        Actions.detail({id : id})
    }
    toSearch(){
        console.log("Search")
    }
    _renderItem ({item, index}) {
        if (item.title != "검색하기"){
            return (
                <TouchableOpacity key={index} onPress={() => this.toDetail(item.id)}>
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={{ width: 145, height:230, borderRadius:8 }}
                    />
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
                    <MovieTitle numberOfLines={1}>
                        { item.title }
                    </MovieTitle>
                    <MovieInfo>
                        {
                            item.genres.map((genre, index) => {
                                if(item.genres.length === index + 1){
                                    return <Text key={index}>{genre}</Text>
                                }
                                else{
                                    return <Text key={index}>{genre}, </Text>
                                }
                            })
                        }
                    </MovieInfo>
                </TouchableOpacity>
            )
        }
        else{
            return (
                <SearchView onPress={Actions.search}>
                    <View style={{flexDirection: 'row'}}>
                        <SearchText>{ item.title }</SearchText>
                        <Icon style={{color:"#555"}} name='search' />
                    </View>
                </SearchView>
            )
        }
    }

    render () {
        var dataList = []
        if (this.props.data==undefined){
            dataList = []
        }
        else{
            dataList = []
            dataList = this.props.data
            dataList.push(this.state.search)
        }
        return (
            <Carousel
                slideStyle={{ marginTop:20, paddingLeft:15 }}
                data={dataList}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                sliderWidth={this.state.windowWidth}
                itemWidth={this.state.windowWidth/(this.state.windowWidth/160)}
                activeSlideAlignment="start"
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />
        )
    }
}