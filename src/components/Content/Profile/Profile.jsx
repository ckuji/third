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

    if(!props.profile) {
        return <div>LOADING...</div>
    }

    return (
        <div className={classes.mainGrid}>
            <div className={classes.avatar}>
                <img className={classes.avaImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU' } alt=""/>
            </div>
            <div className={classes.info}>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.placeWorking}</p>
                <p>Общее количество лайков: {props.profile.commonCountLikes}</p>
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