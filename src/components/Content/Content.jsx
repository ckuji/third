import classes from "./Content.module.css"
import Friends from "./Friens/Friens";
import MyWorks from "./MyWorks/MyWorks";
import News from "./News/News";
import {Route} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Route path="/profile" render={() => <ProfileContainer /> } />
            <Route path="/messages" render={() => <MessagesContainer /> } />
            <Route path="/users" component={UsersContainer} />
            <Route path="/friends" component={Friends} />
            <Route path="/my_works" component={MyWorks} />
            <Route path="/news" component={News} />
        </div>
    );
}

export default Content;