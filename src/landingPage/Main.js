import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation";
import {MainPage} from "./mainPage";
import {Footer} from "./footer";
import {ItemsAll} from "./shop/itemsAll";
import {AppLogin} from "../components/App";

const Main = () => {
    return (
        <>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/itemsAll" component={ItemsAll}/>
                    <Route path="/login" component={AppLogin}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}
export {Main}