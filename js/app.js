import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Navigation} from "./landingPage/navigation";
import {MainPage} from "./landingPage/mainPage";


const App = () => {
return<>
    <Navigation/>
    <MainPage/>
</>
}
ReactDOM.render(<App/>, document.getElementById("app"));