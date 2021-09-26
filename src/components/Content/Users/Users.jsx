import React from "react";
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {

        let pageCount = Math.ceil(props.allPageCount / props.pageSize);
        let pageCountMass = [];
        for(let i=1; i<=pageCount; i++) {
            pageCountMass.push(i)
        }

        return (
            <div className={classes.users}>
                {
                    pageCountMass.map(p => <span onClick={ (e) => {props.setActivePage(p); } }
                                                 className={ props.pageActive === p && classes.pageActive}>
                        {p}
                    </span>)
                }
                <div className={classes.allUsersStart}>All users</div>
                {props.users.map(
                    u =>
                        <div className={classes.unit}>
                            <div>
                                <div className={classes.imgWrapper}>
                                    <NavLink to={"/profile/" + u.id} >
                                        <img className={classes.img} src={u.photos.small ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt=""/>
                                    </NavLink>
                                </div>
                                {
                                    u.status === true
                                        ? <button className={classes.flwBtn} onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                        : <button className={classes.flwBtn} onClick={ () => {props.follow(u.id)} }>Follow</button>
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

export default Users