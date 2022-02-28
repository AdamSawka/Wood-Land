import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Navigation} from "./landingPage/navigation";
import {MainPage} from "./landingPage/mainPage";
import {Footer} from "./landingPage/footer";
import {ItemsAll} from "./landingPage/shop/itemsAll";


const App = () => {
    return (
        <>
        <Navigation/>
    <ItemsAll/>
    <Footer/>
        </>
)
}

ReactDOM.render(<App/>, document.getElementById("app"));