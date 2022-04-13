import logo from '../logo.svg';
import '../App.css';
import Counter from "../components/Counter";
import UserExample from "../components/UserExample";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <UserExample/>
            </header>
        </div>
    );
}

export default App;
