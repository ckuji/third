import React from "react";
import {addNewPost, setProfile, textareaChange} from "../../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setProfile(response.data);
        });
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     textareaProfileValue={this.props.textareaProfileValue}
                     postData={this.props.postData}
                     addNewPost={this.props.addNewPost}
                     textareaChange={this.props.textareaChange}   />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        textareaProfileValue: state.profilePage.textareaValueShow,
        postData: state.profilePage.postData
    }
}

let WithRouterUserIdCC = withRouter(ProfileContainer);

export default connect(mapStateToProps, {addNewPost, textareaChange, setProfile})(WithRouterUserIdCC);

