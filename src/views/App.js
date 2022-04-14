import logo from '../logo.svg';
import '../App.css';
import UserExample from "../components/UserExample";
import RepositoryList from "../components/RepositoryList";
import LandingPage from "../components/LandingPage";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<UserExample/>*/}
                {/*<RepositoryList/>*/}
                <LandingPage />
            </header>
        </div>
    );
}

export default App;
