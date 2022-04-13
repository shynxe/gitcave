import React from 'react';
import '../App.css';
import LandingPage from '../components/LandingPage';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo"/>
                <Counter/> */}
                <LandingPage />
            </header>
        </div>
    );
}

export default App;
