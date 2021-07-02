import classes from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    return (
        <div>
            <NavLink className={classes.navLink} to={'/messages/' + props.friendId}>
                <div className={classes.friendItem}>
                    <div className={classes.imgWrapper}>
                        <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWqfJVCCWY91pg9AkZu5b4p-Wu_oGu4nOZw&usqp=CAU" alt=""/>
                    </div>
                    <div className={classes.nameWrapper}>{props.friendName}</div>
                </div>
            </NavLink>
        </div>
    );
}

export default FriendItem;