import classes from "./Content.module.css"
import Friends from "./Friens/Friens";
import MyWorks from "./MyWorks/MyWorks";
import News from "./News/News";
import {Route} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <Route path="/profile" render={() => <ProfileContainer store={props.store} /> } />
            <Route path="/messages" render={() => <MessagesContainer store={props.store} /> } />
            <Route path="/friends" component={Friends} />
            <Route path="/my_works" component={MyWorks} />
            <Route path="/news" component={News} />
        </div>
    );
}

export default Content;