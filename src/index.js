import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux imports
import { createStore } from "redux";
import { Provider } from "react-redux";
import eventsReducers from "./redux/reducers/eventsReducers";

const store = createStore(
    eventsReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
