import { Rating, AirbnbRating } from 'react-native-ratings'
import { Col, Row, Grid } from 'react-native-easy-grid'

const MovieThumbnail = styled(Thumbnail)`
    width:100;
    height: 140;
    borderRadius: 8;
`
const MovieTitle = styled(Text)`
    fontSize: 20;
`

export default class SearchItem extends Component<Props> {
    render() {
        return (
            <ListItem Thumbnail>
                <Grid>
                    <Row>
                        <Col style={{flex:1}}>
                            <MovieThumbnail square source={{ uri: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg' }} />
                        </Col>
                        <Col style={{flex:2}}>
                            <MovieTitle>뺑반</MovieTitle>
                            <View style={{flexDirection: 'row'}}>
                                <Rating
                                    readonly
                                    ratingCount={5}
                                    startingValue={4.2}
                                    imageSize={17}
                                    style={{ alignItems:"flex-start" }}
                                />
                                <Text>4.2</Text>
                            </View>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Col>
                    </Row>
                </Grid>
            </ListItem>
        )
    }
}
