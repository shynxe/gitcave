import logo from '../logo.svg';
import '../App.css';
import Counter from "../components/Counter";

function App() {
    // function that increments the counter from redux state
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Counter/>
            </header>
        </div>
    );
}

export default App;
