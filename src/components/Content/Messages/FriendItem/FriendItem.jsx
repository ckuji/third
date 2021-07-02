import classes from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={classes.friendItem}>
            <div className={classes.imgWrapper}>
                <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWqfJVCCWY91pg9AkZu5b4p-Wu_oGu4nOZw&usqp=CAU" alt=""/>
            </div>
            <div className={classes.nameWrapper}>{props.friendName}</div>
        </div>
    );
}

export default FriendItem;