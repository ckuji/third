import classes from './Messages.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Messages = (props) => {

    let someFriendList = props.messagesData.friendsListData.map( friend => <FriendItem friendName={friend.fullName} friendId={friend.id} /> )

    return (
        <div className={classes.messages}>
            <div className={classes.friendList}>
                {someFriendList}
            </div>
            <div className={classes.dialogList}>
                <div className={classes.messagesWrapper}>

                </div>
                <div className={classes.textareaWrapper}>

                </div>
            </div>
        </div>
    );
}

export default Messages;