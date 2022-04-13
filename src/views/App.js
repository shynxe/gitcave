import logo from '../logo.svg';
import '../App.css';
import Counter from "../components/Counter";
import UserExample from "../components/UserExample";
import RepositoryList from "../components/RepositoryList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <UserExample/>
                <RepositoryList/>
            </header>
        </div>
    );
}

export default App;
