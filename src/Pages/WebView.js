import React, {Component} from 'react';
import { WebView } from 'react-native'

type Props = {};

export default class WebViewPage extends Component<Props> {

    onValueChange(value){
        this.setState({
            selected: value
        })
    }
    render() {
        return (
            <WebView 
            source={{uri: 'https://goo.gl/forms/vgtatcKSiFIv3Xv73'}}
            style={{flex: 1}}/>
        )
    }
}
