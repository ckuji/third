import classes from "./Content.module.css"
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Friends from "./Friens/Friens";
import MyWorks from "./MyWorks/MyWorks";
import News from "./News/News";
import {Route} from "react-router-dom";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Route path="/profile" render={() => <Profile store={props.store} /> } />
            <Route path="/messages" render={() => <Messages store={props.store} /> } />
            <Route path="/friends" component={Friends} />
            <Route path="/my_works" component={MyWorks} />
            <Route path="/news" component={News} />
        </div>
    );
}

export default Content;