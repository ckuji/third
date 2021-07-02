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
                     dispatch={props.dispatch}   />
        </div>
    );
}

export default App;
