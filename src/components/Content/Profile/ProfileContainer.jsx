import React from "react";
import {addNewPostActionCreator, textareaChangeActionCreator} from "../../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        startState: state.profilePage.startProfileData[0],
        textareaProfileValue: state.profilePage.textareaValueShow,
        postData: state.profilePage.postData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        textareaChange: (txt) => {
            dispatch( textareaChangeActionCreator(txt) );
        },
        addPost: () => {
            dispatch( addNewPostActionCreator() );
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;