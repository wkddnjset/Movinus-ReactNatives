import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

const DetailContext  = React.createContext({});

export const DetailConsumer = DetailContext.Consumer

export class DetailProvider extends Component {
    state = {
        title: true,
        data: []
    }
    actions = {
        signIn: (email, password) => {
            // signIn API

            // LocalStorage 같은 역할
            // AsyncStorage.setItem('selectedDate', JSON.stringify(formatDate(day.dateString)))
        },
        signUp : (email, password) => {
            // signUp API

            // LocalStorage 같은 역할
            console.log("월별 API 데이터 불러오기")
        }
    }
    render() {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <DetailContext.Provider value={value}>
                {this.props.children}
            </DetailContext.Provider>
        )
    }
}