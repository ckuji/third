import classes from './Profile.module.css';
import Posts from "./Posts/Posts";
import React from "react";

const Profile = (props) => {

    let textareaChange = (e) => {
        let text = e.target.value;
        props.textareaChange(text);
    };

    let addPost = () => {
        props.addPost();
    };

    return (
        <div className={classes.mainGrid}>
            <div className={classes.avatar}>
                <img className={classes.avaImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJDa6S5yA2FBlmLse2elZQS-wjrfc8C0PbA&usqp=CAU" alt=""/>
            </div>
            <div className={classes.info}>
                <p>{props.startState.fullName}</p>
                <p>{props.startState.placeLiving}</p>
                <p>{props.startState.placeWorking}</p>
                <p>Общее количество лайков: {props.startState.commonCountLikes}</p>
            </div>
            <div className={classes.posts}>
                <h1>Записи</h1>
                <form action="">
                    <textarea className={classes.sendText}
                              value={props.textareaProfileValue}
                              onChange={textareaChange}  />
                    <div className={classes.buttonWrapper}>
                        <div className={classes.sendButton} onClick={addPost}>Отправить</div>
                    </div>
                </form>
                <Posts postData={props.postData} />
            </div>
        </div>
    );
}

export default Profile;