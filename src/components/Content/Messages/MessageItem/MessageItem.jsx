import classes from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={classes.messageItem}>
            <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWqfJVCCWY91pg9AkZu5b4p-Wu_oGu4nOZw&usqp=CAU" alt=""/>
            </div>
            <div className={classes.text}>{props.text}</div>
        </div>
    );
}

export default MessageItem;