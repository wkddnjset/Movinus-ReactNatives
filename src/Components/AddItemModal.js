
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Item, Input, Textarea, Form } from 'native-base'
import { AirbnbRating  } from 'react-native-ratings'
import styled from 'styled-components/native'
import DateTimePicker from 'react-native-modal-datetime-picker'
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
const ButtonComfirm = styled(Button)`
    backgroundColor: rgb(69, 134, 198);
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
    width: 99%;
    alignItems:center;
`
export default class AddItemModalComponent extends Component {
    
    render() {
        const { rateView, rate, title, review, selectedDate, isModalVisible } = this.props
        const { _onFinishRating, _showDateTimePicker, _changeTitle, _changeReview, _toggleModal, _updateItem } = this.props
        return (
            <ModalWrapper 
            isVisible={isModalVisible}
            backdropOpacity={0.4}>
                <ModalBox>
                    <ModalTitle>{rateView}</ModalTitle>
                    <AirbnbRating 
                        count={5}
                        defaultRating={0}
                        imageSize={40}
                        style={{color:"#333"}}
                        showRating={false}
                        onFinishRating={_onFinishRating}
                    />
                    <Item regular style={{marginTop: 20}}>
                        <ReviewTitilInput placeholder='한줄요약' onChangeText={_changeTitle}/>
                    </Item>
                    <Item regular style={{marginTop: 5}} onPress={_showDateTimePicker}>
                        <ReviewTitilInput placeholder="날짜" value={selectedDate} editable={false}/>
                    </Item>
                    <ReviewTextarea rowSpan={5} bordered placeholder="리뷰" onChangeText={_changeReview}/>
                    <ButtonGroup>
                        <ButtonCancel onPress={_toggleModal}>
                            <ButtonText>취소</ButtonText>
                        </ButtonCancel>
                        <ButtonComfirm onPress={() => _updateItem(title, review, rate)}>
                            <ButtonText>확인</ButtonText>
                        </ButtonComfirm>
                    </ButtonGroup>
                </ModalBox>
            </ModalWrapper>
        );
    }
}