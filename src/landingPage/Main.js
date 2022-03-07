import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation";
import {MainPage} from "./mainPage";
import {Footer} from "./footer";
import {ItemsAll} from "./shop/itemsAll";
import {AppLogin} from "../components/App";
import {Sort} from "./shop/sort";


const Main = () => {
    // const [authToken, setAuthToken] = useState(null);
    // const {} = useContext();
    return (
        <>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/itemsAll" component={ItemsAll}/>
                    <Route path="/login" ><AppLogin/></Route>
                    <Route path="/pillows" ><Sort typeElement='pillow'/> </Route>
                    <Route path="/decorations" ><Sort typeElement='decoration'/> </Route>
                    <Route path="/shirts" ><Sort typeElement='shirt'/> </Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}
export {Main}