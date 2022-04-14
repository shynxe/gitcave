import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import {store, persistor} from "./app/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import theme from "./config/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";


import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Content from './components/Content.js'

ReactDOM.render(
    <React.StrictMode>
      {/* <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<App/>}/>
                  </Routes>
              </BrowserRouter>
          </ThemeProvider>
          </PersistGate>
      </Provider> */}
        <Navbar />
            <div className='mainCointainer' style={{display: 'flex'}}>
                <Sidebar />
                <Content />
            </div>
        
        <Footer />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
