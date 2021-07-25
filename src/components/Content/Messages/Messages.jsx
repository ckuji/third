import classes from './Messages.module.css';
import FriendItem from "./FriendItem/FriendItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Messages = (props) => {

    let someFriendList = props.messagesState.friendsListData.map( friend => <FriendItem friendName={friend.fullName} friendId={friend.id} /> )

    let someDialogList = props.messagesState.dialogsListData.map( dialog => <MessageItem text={dialog.text} /> )

    let onMessageChange = (e) => {
        let symbols = e.target.value;
        props.onMessageChange(symbols);
    }

    let addMessage = () => {
        props.addMessage();
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
                              value={props.messagesState.textareaCurrentValue}
                              onChange={onMessageChange}  />
                    <button className={classes.addBtn} onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;