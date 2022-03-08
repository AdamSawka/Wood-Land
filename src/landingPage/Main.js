import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation";
import {MainPage} from "./mainPage";
import {Footer} from "./footer";
import {ItemsAll} from "./shop/itemsAll";
import {AppLogin} from "../components/App";
import {SortNew, SortType, SortPopular} from "./shop/sort";


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
                    <Route path="/pillows" ><SortType typeElement='pillow'/> </Route>
                    <Route path="/decorations" ><SortType typeElement='decoration'/> </Route>
                    <Route path="/shirts" ><SortType typeElement='shirt'/> </Route>
                    <Route path="/images" ><SortType typeElement='image'/> </Route>
                    <Route path="/popular" ><SortPopular/> </Route>
                    <Route path="/news" ><SortNew/> </Route>

                </Switch>
                <Footer/>
            </Router>
        </>
    )
}
export {Main}