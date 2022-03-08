import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation";
import {MainPage} from "./mainPage";
import {Footer} from "./footer";
import {ItemsAll} from "./shop/itemsAll";
import {AppLogin} from "../components/App";
import {SortNew, SortType, SortPopular} from "./shop/sort";
import { AuthProvider } from "../firebase/context";
import {Basket} from "./Basket";


const Main = () => {

    return (
        <>
            <AuthProvider>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/itemsAll" component={ItemsAll}/>
                    <Route path="/signin"  exact component={AppLogin}/>
                    <Route path="/pillows" ><SortType typeElement='pillow'/> </Route>
                    <Route path="/decorations" ><SortType typeElement='decoration'/> </Route>
                    <Route path="/shirts" ><SortType typeElement='shirt'/> </Route>
                    <Route path="/images" ><SortType typeElement='image'/> </Route>
                    <Route path="/popular" ><SortPopular/> </Route>
                    <Route path="/news" ><SortNew/> </Route>
                    <Route path="/basket" ><Basket/> </Route>

                </Switch>
                <Footer/>
            </Router>
            </AuthProvider>
        </>
    )
}
export {Main}