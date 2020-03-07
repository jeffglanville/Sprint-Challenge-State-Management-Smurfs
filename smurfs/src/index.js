import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'react-thunk';
import "./index.css";
import App from "./components/App";
import { smurfReducer } from './reducers/SmurfReducer';

const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById("root"));
