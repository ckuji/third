import classes from './Messages.module.css';
import FriendItem from "./FriendItem/FriendItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import {addNewMessageActionCreator, changeShowMessageActionCreator} from "../../../redux/messages-reducer";

const Messages = (props) => {

    let someFriendList = props.store.getState().messagesPage.friendsListData.map( friend => <FriendItem friendName={friend.fullName} friendId={friend.id} /> )

    let someDialogList = props.store.getState().messagesPage.dialogsListData.map( dialog => <MessageItem text={dialog.text} /> )

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let symbols = newMessageElement.current.value;
        props.store.dispatch( changeShowMessageActionCreator(symbols) );
    }

    let addMessage = () => {
        props.store.dispatch( addNewMessageActionCreator() )
    }

    return (
        <div className={classes.messages}>
            <div className={classes.friendList}>
                {someFriendList}
            </div>
            <div className={classes.dialogList}>
                <div className={classes.messagesWrapper}>
                    {someDialogList}
                </div>
                <div className={classes.textareaWrapper}>
                    <textarea className={classes.textArea}
                              value={props.store.getState().messagesPage.textareaCurrentValue}
                              ref={newMessageElement}
                              onChange={onMessageChange}  />
                    <button className={classes.addBtn} onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;