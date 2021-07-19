import classes from './Profile.module.css';
import Posts from "./Posts/Posts";
import React from "react";
import {addNewPostActionCreator, textareaChangeActionCreator} from "../../../redux/profile-reducer";

const Profile = (props) => {

    let textareaValue = React.createRef();

    let textareaChange = () => {
        let text = textareaValue.current.value;
        props.store.dispatch( textareaChangeActionCreator(text) );
    };

    let addPost = () => {
        props.store.dispatch( addNewPostActionCreator() );
    };

    return (
        <div className={classes.mainGrid}>
            <div className={classes.avatar}>
                <img className={classes.avaImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJDa6S5yA2FBlmLse2elZQS-wjrfc8C0PbA&usqp=CAU" alt=""/>
            </div>
            <div className={classes.info}>
                <p>{props.store.getState().profilePage.startProfileData[0].fullName}</p>
                <p>{props.store.getState().profilePage.startProfileData[0].placeLiving}</p>
                <p>{props.store.getState().profilePage.startProfileData[0].placeWorking}</p>
                <p>Общее количество лайков: {props.store.getState().profilePage.startProfileData[0].commonCountLikes}</p>
            </div>
            <div className={classes.posts}>
                <h1>Записи</h1>
                <form action="">
                    <textarea className={classes.sendText}
                              ref={textareaValue}
                              value={props.store.getState().profilePage.textareaValueShow}
                              onChange={textareaChange}  />
                    <div className={classes.buttonWrapper}>
                        <div className={classes.sendButton} onClick={addPost}>Отправить</div>
                    </div>
                </form>
                <Posts postData={props.store.getState().profilePage.postData} />
            </div>
        </div>
    );
}

export default Profile;