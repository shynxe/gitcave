import logo from '../logo.svg';
import '../App.css';
import UserExample from "../components/UserExample";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <UserExample/>
                <Link to={"/browse"} state={{ data: 0 }}>Browse Repo</Link>
            </header>
        </div>
    );
}

export default App;
