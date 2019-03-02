
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Item, Input, Textarea, Form } from 'native-base'
import { AirbnbRating  } from 'react-native-ratings'
import styled from 'styled-components/native'
import Modal from "react-native-modal"

const ModalWrapper = styled(Modal)`
    alignItems:center;
    justifyContent:center;

`
const ModalBox = styled.View`
    backgroundColor: #FFF;
    width:90%;
    padding:15px;
    alignItems:center;
    justifyContent: center;
`
const ModalTitle = styled.Text`
    fontSize:25;
    color: #444;
    fontWeight: 600;
    margin: 10px;
`
const ButtonGroup = styled.View`
    flexDirection: row;
    marginTop: 30;
`
const ButtonCancel = styled(Button)`
    backgroundColor: #999
    marginRight: 10;
`
const ButtonText = styled.Text`
    color: #FFF;
    paddingLeft: 20;
    paddingRight: 20;
`
const ReviewTitilInput = styled(Input)`
    width: 100%;
    fontSize: 15;
    padding: 10px;
`
const ReviewTextarea = styled(Textarea)`
    width: 100%;
`
export default class AddItemModalComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            title:"별점을 선택해주세요"
        }
        this._onFinishRating = this._onFinishRating.bind(this)
    }
    _onFinishRating(number){
        var title = ""
        switch (number){
            case 1:
                title = "세상에 둘도없는 노잼ㅠㅠ"
                break 
            case 2:
                title = "내가 헛것을 봤나.."
                break 
            case 3:
                title = "킬링타임 대마왕"
                break 
            case 4:
                title = "두번볼 가치가 있다!"
                break 
            case 5:
                title = "인생영화 드디어 발견!"
                break 
        }
        this.setState({
            title: title
        })
    }
    _updateItem(){
        console.log("Updaet")
    }
    render() {
        return (
            <ModalWrapper 
            isVisible={this.props.isModalVisible}
            backdropOpacity={0.4}>
                <ModalBox>
                    <ModalTitle>{this.state.title}</ModalTitle>
                    <AirbnbRating 
                        count={5}
                        defaultRating={0}
                        imageSize={40}
                        style={{color:"#333"}}
                        showRating={false}
                        onFinishRating={this._onFinishRating}
                    />
                    <Item regular style={{marginTop: 20}}>
                        <ReviewTitilInput placeholder='한줄요약' />
                    </Item>
                    <ReviewTextarea rowSpan={5} bordered placeholder="리뷰"/>
                    <ButtonGroup>
                        <ButtonCancel onPress={this.props._toggleModal}>
                            <ButtonText>취소</ButtonText>
                        </ButtonCancel>
                        <Button info onPress={this._updateItem}>
                            <ButtonText>확인</ButtonText>
                        </Button>
                    </ButtonGroup>
                    
                </ModalBox>
            </ModalWrapper>
        );
    }
}