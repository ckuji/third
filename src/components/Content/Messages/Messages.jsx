import classes from './Messages.module.css';
import FriendItem from "./FriendItem/FriendItem";

const Messages = (props) => {

    let someFriendList = props.messagesData.friendsListData.map( friend => <FriendItem friendName={friend.fullName} /> )

    return (
        <div className={classes.messages}>
            <div className={classes.friendList}>
                {someFriendList}
            </div>
            <div className={classes.dialogList}>dialog list</div>
        </div>
    );
}

export default Messages;