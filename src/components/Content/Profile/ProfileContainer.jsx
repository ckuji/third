import React from "react";
import {addNewPostActionCreator, textareaChangeActionCreator} from "../../../redux/profile-reducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {

    let textareaChangeFunction = (txt) => {
        props.store.dispatch( textareaChangeActionCreator(txt) );
    };

    let addPostFunction = () => {
        props.store.dispatch( addNewPostActionCreator() );
    };

    let startState = props.store.getState().profilePage.startProfileData[0];

    let textareaProfileValue = props.store.getState().profilePage.textareaValueShow;

    let postData = props.store.getState().profilePage.postData

    return (
        <Profile textareaChange={textareaChangeFunction}
                 addPost={addPostFunction}
                 startState={startState}
                 textareaProfileValue={textareaProfileValue}
                 postData={postData} />
    );
}

export default ProfileContainer;