import React, {Component} from 'react'
import { Rating } from 'react-native-ratings'
import { Text, View} from 'react-native'
import { ListItem, Thumbnail }  from 'native-base'
import styled from 'styled-components/native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'

const MovieThumbnail = styled(Thumbnail)`
    width:100;
    height: 140;
    borderRadius: 8;
`
const MovieTitle = styled(Text)`
    fontSize: 20;
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
const DescriptionText = styled.Text`
    marginTop: 10;
`
export default class SearchItemComponent extends Component<Props> {
    toDetail(){
        Actions.detail()
    }
    render() {
        return (
            <ListItem Thumbnail onPress={this.toDetail}>
                <Grid>
                    <Row>
                        <Col style={{flex:1}}>
                            <MovieThumbnail square source={{ uri: this.props.thumbnail }} />
                        </Col>
                        <Col style={{flex:2, justifyContent: "center"}}>
                            <MovieTitle>{this.props.title}</MovieTitle>
                            <RatingView>
                                <Rating
                                    readonly
                                    ratingCount={5}
                                    startingValue={this.props.rate/2}
                                    imageSize={17}
                                    style={{ alignItems:"flex-start" }}
                                />
                                <RateText>{this.props.rate}</RateText>
                            </RatingView>
                            <DescriptionText note numberOfLines={3}>{this.props.description}</DescriptionText>
                        </Col>
                    </Row>
                </Grid>
            </ListItem>
        )
    }
}
