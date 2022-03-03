import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./landingPage/navigation";
import {MainPage} from "./landingPage/mainPage";
import {Footer} from "./landingPage/footer";
import {ItemsAll} from "./landingPage/shop/itemsAll";
import {AppLogin} from "./components/App";


const App = () => {
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

ReactDOM.render(<App/>, document.getElementById("app"));