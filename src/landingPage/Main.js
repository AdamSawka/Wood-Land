import React, {useContext, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation";
import {MainPage} from "./mainPage";
import {Footer} from "./footer";
import {ItemsAll} from "./shop/itemsAll";
import {AppLogin} from "../components/App";


const Main = () => {
    const [authToken, setAuthToken] = useState(null);
    // const {} = useContext();
    return (
        <>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/itemsAll" component={ItemsAll}/>
                    <Route path="/login" ><AppLogin setToken={setAuthToken}/></Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}
export {Main}