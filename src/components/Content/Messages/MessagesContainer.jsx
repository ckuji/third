import React from "react";
import {addNewMessageActionCreator, changeShowMessageActionCreator} from "../../../redux/messages-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let messagesState = props.store.getState().messagesPage;

    let onMessageChangeFunction = (sym) => {
        props.store.dispatch( changeShowMessageActionCreator(sym) );
    }

    let addMessageFunction = () => {
        props.store.dispatch( addNewMessageActionCreator() )
    }

    return (
        <Messages onMessageChange={onMessageChangeFunction}
                  addMessage={addMessageFunction}
                  messagesState={messagesState} />
    );
}

export default MessagesContainer;