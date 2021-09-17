import Post from "./Post/Post";
import classes from './Posts.module.css';

const Posts = (props) => {

    let somePostData = props.postData.map( sPData => <Post manName={sPData.fullName} manText={sPData.text} manLikes={sPData.likes} /> );

    return (
        <div className={classes.posts}>
            {somePostData}
        </div>
    );
}

export default Posts