import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postLine}>
                <div className={classes.imgWrapper}>
                    <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWqfJVCCWY91pg9AkZu5b4p-Wu_oGu4nOZw&usqp=CAU" alt=""/>
                </div>
                <div className={classes.textWrapper}>
                    <div className={classes.fullName}>{props.manName}</div>
                    <div className={classes.text}>{props.manText}</div>
                </div>
            </div>
            <div className={classes.likesCounterWrapper}>
                <div>{props.manLikes} likes</div>
            </div>
        </div>
    );
}

export default Post