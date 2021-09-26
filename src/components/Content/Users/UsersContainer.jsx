import {connect} from "react-redux";
import {follow, setActivePage, setUsers, unfollow} from "../../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    pageActiveChange = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   allPageCount={this.props.allPageCount}
                   pageActive={this.props.pageActive}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setUsers={this.props.setUsers}
                   setActivePage={this.pageActiveChange} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        allPageCount: state.usersPage.allPageCount,
        pageActive: state.usersPage.pageActive
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setActivePage})(UsersContainer);

