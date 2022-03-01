import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./landingPage/navigation";
import {MainPage} from "./landingPage/mainPage";
import {Footer} from "./landingPage/footer";
import {ItemsAll} from "./landingPage/shop/itemsAll";


const App = () => {
    return (
        <>
            <Router>
                <Navigation/>
                <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/landingPage/shop/itemsAll" component={ItemsAll}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));