import React, {Component} from 'react'
import { Content, List }  from 'native-base'
import { Actions } from 'react-native-router-flux'

// Components
import SearchItemComponent from '../Components/SearchItem'
import ReadyToSearchComponent from '../Components/ReadyToSearch'

type Props = {};

export default class SearchListComponent extends Component<Props> {
    render() {
        if(this.props.status == "Success"){
            return (
                <Content>
                    <List>
                        {
                            this.props.data.map((data, index) => (
                                <SearchItemComponent
                                    key={index}
                                    title={data.title}
                                    thumbnail={data.thumbnail}
                                    rate={data.rate}
                                    description={data.description}
                                />
                            ))
                        }
                    </List>
                </Content>
            )
        }
        else{
            return(
                <ReadyToSearchComponent/>
            )
        }
        
    }
}
