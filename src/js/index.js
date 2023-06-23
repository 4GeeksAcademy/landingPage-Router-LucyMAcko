//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Router from "./component/router.jsx";
import Home from "./component/home.jsx";
import {Provider} from "react-redux";
import store from "./component/store.js";

const Root = () =>{
    return (
        <Provider store={store} >
            <Home/>
        </Provider>
    )
}

//render your react application
ReactDOM.render(<Router />, document.querySelector("#app"));
