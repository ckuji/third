import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <div className={classes.nav}>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users'>All users</NavLink>
            </div>
            <div>
                <NavLink to='/friends'>Friends</NavLink>
            </div>
            <div>
                <NavLink to='/my_works'>My works</NavLink>
            </div>
            <div>
                <NavLink to='/news'>News</NavLink>
            </div>
        </div>
    );
}

export default Nav;