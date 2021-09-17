import React from "react";
import classes from './Users.module.css';
import * as axios from "axios";

class UsersClass extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    pageActiveChange = (pageNumber) => {
        this.props.pageActiveChange(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pageCount = Math.ceil(this.props.allPageCount / this.props.pageSize);
        let pageCountMass = [];
        for(let i=1; i<=pageCount; i++) {
            pageCountMass.push(i)
        }

        return (
            <div className={classes.users}>
                {
                    pageCountMass.map(p => <span onClick={ (e) => {this.pageActiveChange(p); } }
                                                 className={ this.props.pageActive === p && classes.pageActive}>
                        {p}
                    </span>)
                }
                <div className={classes.allUsersStart}>All users</div>
                {this.props.users.map(
                    u =>
                        <div className={classes.unit}>
                            <div>
                                <div className={classes.imgWrapper}>
                                    <img className={classes.img} src={u.imgLink} alt=""/>
                                </div>
                                {
                                    u.status === true
                                        ? <button className={classes.flwBtn} onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
                                        : <button className={classes.flwBtn} onClick={ () => {this.props.follow(u.id)} }>Follow</button>
                                }
                            </div>
                            <div className={classes.unitContent}>
                                <div>
                                    <div className={classes.fullName}>{u.name}</div>
                                    <div className={classes.about}>{u.about}</div>
                                </div>
                                <div>
                                    <div className={classes.country}>{u.country}</div>
                                    <div className={classes.city}>{u.city}</div>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        )
    }
}

export default UsersClass