import React, { Component } from 'react'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
// Utils
import { getGenre } from '../Utils/Genre'

const SeacrhContext  = React.createContext({});

export const SeacrhConsumer = SeacrhContext.Consumer

export class SeacrhProvider extends Component {
    state = {
        searchText: null,
        resultText: "검색어를 입력해주세요.",
        status : null,
        data: [{
            genres:[]
        }]
    }
    actions = {
        search: (text, page) => { 
            // Search API
            if(text == ""){
                this.setState({
                    status: null
                })
            }
            else{
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d1bad0612955f9a34614bc14dda70291&language=ko-KR&query=${text}&page=${page}&include_adult=true`)
                    .then(res => {
                        if (res.data.results.length == 0){
                            this.setState({
                                status: "Error"
                            })
                        }
                        else{
                            var dataList = []
                            const results = res.data.results
                            for (var result of results){
                                var genreList = []
                                for (var genre_id of result.genre_ids.slice(0, 3)){
                                    genreList.push(getGenre(genre_id))
                                }
                                var data = {
                                    id: result.id,
                                    title: result.title,
                                    rate: result.vote_average,
                                    genres: genreList,
                                    nations: [],
                                    thumbnail: "https://image.tmdb.org/t/p/w500" + result.poster_path,
                                    description: result.overview
                                }
                                dataList.push(data)
                            }
                            this.setState({
                                status: "Success",
                                data: dataList
                            })
                        }
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