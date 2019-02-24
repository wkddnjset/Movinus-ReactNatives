import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

const SeacrhContext  = React.createContext({});

export const SeacrhConsumer = SeacrhContext.Consumer

export class SeacrhProvider extends Component {
    state = {
        searchText: null,
        resultText: "검색어를 입력해주세요.",
        status : null,
        data: [
            {
                title : "뺑반1",
                thumbnail : "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                rate : 7.2,
                description : `경찰 내 최고 엘리트 조직 내사과 소속 경위 ‘은시연’(공효진). 조직에서 유일하게 믿고 따르는 ‘윤과장’(염정아)과 함께 F1 레이서 출신의 사업가 ‘정재철’(조정석)을 잡기 위해 수사망을 조여가던 시연은 무리한 강압 수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다.`
            },
            {
                title : "뺑반2",
                thumbnail : "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                rate : 7.2,
                description : `경찰 내 최고 엘리트 조직 내사과 소속 경위 ‘은시연’(공효진). 조직에서 유일하게 믿고 따르는 ‘윤과장’(염정아)과 함께 F1 레이서 출신의 사업가 ‘정재철’(조정석)을 잡기 위해 수사망을 조여가던 시연은 무리한 강압 수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다.`
            },
            {
                title : "뺑반3",
                thumbnail : "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                rate : 7.2,
                description : `경찰 내 최고 엘리트 조직 내사과 소속 경위 ‘은시연’(공효진). 조직에서 유일하게 믿고 따르는 ‘윤과장’(염정아)과 함께 F1 레이서 출신의 사업가 ‘정재철’(조정석)을 잡기 위해 수사망을 조여가던 시연은 무리한 강압 수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다.`
            },
            {
                title : "뺑반4",
                thumbnail : "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81561/81561_1000.jpg",
                rate : 7.2,
                description : `경찰 내 최고 엘리트 조직 내사과 소속 경위 ‘은시연’(공효진). 조직에서 유일하게 믿고 따르는 ‘윤과장’(염정아)과 함께 F1 레이서 출신의 사업가 ‘정재철’(조정석)을 잡기 위해 수사망을 조여가던 시연은 무리한 강압 수사를 벌였다는 오명을 쓰고 뺑소니 전담반으로 좌천된다.`
            },
        ]
    }
    actions = {
        search: (text) => { 
            // Search API
            if(text == ""){
                this.setState({
                    status: null
                })
            }
            else{
                this.setState({
                    status: "Error"
                })
            }
        },
    }
    render() {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <SeacrhContext.Provider value={value}>
                {this.props.children}
            </SeacrhContext.Provider>
        )
    }
}