import React from "react";
import {addNewMessageActionCreator, changeShowMessageActionCreator} from "../../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friendsListData: state.messagesPage.friendsListData,
        dialogsListData: state.messagesPage.dialogsListData,
        textareaCurrentValue: state.textareaCurrentValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch( addNewMessageActionCreator() )
        },
        onMessageChange: (sym) => {
            dispatch( changeShowMessageActionCreator(sym) )
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;