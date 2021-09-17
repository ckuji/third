import {connect} from "react-redux";
import {followAC, setActivePageAC, setUsersAC, unfollowAC} from "../../../redux/users-reducer";
import UsersClass from "./UsersClass";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        allPageCount: state.usersPage.allPageCount,
        pageActive: state.usersPage.pageActive
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        pageActiveChange: (pageNumber) => {
            dispatch(setActivePageAC(pageNumber))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer