import React, { Component } from 'react';
import { Icon } from 'native-base'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const ReadyView = styled.View`
    alignItems: center;
    justifyContent: center;
    marginTop: 50;
`
const ReadyIcon = styled(Icon)`
    fontSize: 60;
`
const ReadyText = styled.Text`
    fontSize: 20;
    color: #000000;
    marginTop: 20;
`

export default class ReadyToSearchComponent extends Component {
  
    render() {
        return (
            <ReadyView>
                <ReadyIcon type="AntDesign" name={this.props.icon}/>
                <ReadyText>{this.props.text}</ReadyText>
            </ReadyView>
        )
    }
}