import classes from './Messages.module.css';
import FriendItem from "./FriendItem/FriendItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Messages = (props) => {

    let someFriendList = props.messagesData.friendsListData.map( friend => <FriendItem friendName={friend.fullName} friendId={friend.id} /> )

    let someDialogList = props.messagesData.dialogsListData.map( dialog => <MessageItem text={dialog.text} /> )

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let symbols = newMessageElement.current.value;
        props.dispatch( {type: 'CHANGE-SHOW-MESSAGE', text: symbols} );
    }

    let addMessage = () => {
        props.dispatch( {type: 'ADD-NEW-MESSAGE'} )
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
                              value={props.messagesData.textareaCurrentValue}
                              ref={newMessageElement}
                              onChange={onMessageChange}  />
                    <button className={classes.addBtn} onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;