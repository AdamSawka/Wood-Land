import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation";
import {MainPage} from "./mainPage";
import {Footer} from "./footer";
import {ItemsAll} from "./shop/itemsAll";
import {AppLogin} from "../components/AppLogin";
import {SortNew, SortType, SortPopular} from "./shop/sort";
// import { AuthProvider } from "../firebase/context";
import {Basket} from "./Basket";

//useReducer
const Main = () => {
    const [basket, setBasket] = useState([]);
     const addProductToBasket = (product) => {
        const newBasket = [...basket, product.id];
        // todo :: logic of adding to basket
         console.log(newBasket);
         setBasket(newBasket)
    }
    const removeFromProductToBasket = (product) => {
        const newBasket = [...basket];
        // todo :: logic of removing to basket
        setBasket(newBasket)
    }
    return (
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/main"><MainPage /></Route>
                    <Route path="/itemsAll"><ItemsAll add={addProductToBasket} /></Route>
                    <Route path="/login" > <AppLogin />  </Route>
                    <Route path="/pillows" ><SortType typeElement='pillow'/> </Route>
                    <Route path="/decorations" ><SortType typeElement='decoration'/> </Route>
                    <Route path="/shirts" ><SortType typeElement='shirt'/> </Route>
                    <Route path="/images" ><SortType typeElement='image'/> </Route>
                    <Route path="/popular" ><SortPopular /> </Route>
                    <Route path="/news" ><SortNew /> </Route>
                    <Route path="/basket" ><Basket items={basket} remove={removeFromProductToBasket}/> </Route>
                </Switch>
                <Footer/>
            </Router>
    )
}
export {Main}
