import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
        <div className="main-content">
            <Header />
            <Nav />
            <Content state={props.state}
                     textareaChangeFunction={props.textareaChangeFunction}
                     addNewPost={props.addNewPost}   />
        </div>
    );
}

export default App;
