import Post from "./Post/Post";
import classes from './Posts.module.css';

let postData = [
    {
        id:1,
        fullName: 'Иванов Иван Иванович',
        text: ''
    }
]

const Posts = () => {
    return (
        <div className={classes.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts