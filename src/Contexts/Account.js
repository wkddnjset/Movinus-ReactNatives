import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

const AccountContext  = React.createContext({})

export const AccountConsumer = AccountContext.Consumer

export class AccountProvider extends Component {
    state = {
        loading: true,
        isLogined: false,
        token: null 
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
            <AccountContext.Provider value={value}>
                {this.props.children}
            </AccountContext.Provider>
        )
    }
}