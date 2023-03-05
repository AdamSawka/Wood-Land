import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from "./navigation";
import {MainPage} from "./mainPage";
import {Footer} from "./footer";
import {ItemsAll} from "./shop/itemsAll";
import {AppLogin} from "../components/AppLogin";
import {SortNew, SortType, SortPopular} from "./shop/sort";
import {Basket} from "./Basket";
// const API_URL = 'http://localhost:3000';

//useReducer
const Main = () => {
    const [basket, setBasket] = useState([]);

     const addProductToBasket = (product) => {
        const newBasket = [...basket,product];
         // const data = {userId:"",idOfProducts: newBasket}
         //     fetch(`${API_URL}/baskets`, {
         //         method: "POST",
         //         body: JSON.stringify(data),
         //         headers: {
         //             "Content-Type": "application/json"
         //         }
         //     })
         setBasket(newBasket)
    }
    const removeFromProductToBasket = (product) => {
        const newBasket = [...basket];

        setBasket(newBasket)
    }
    return (
            <Router>
                <Navigation basket={basket} />
                <Switch>
                    <Route path="/main"><MainPage /></Route>
                    <Route path="/itemsAll"><ItemsAll add={addProductToBasket} /></Route>
                    <Route path="/login" > <AppLogin />  </Route>
                    <Route path="/pillows" ><SortType typeElement='pillow' add={addProductToBasket}/> </Route>
                    <Route path="/decorations" ><SortType typeElement='decoration' add={addProductToBasket} /> </Route>
                    <Route path="/shirts" ><SortType typeElement='shirt' add={addProductToBasket}/> </Route>
                    <Route path="/images" ><SortType typeElement='image' add={addProductToBasket}/> </Route>
                    <Route path="/popular" ><SortPopular add={addProductToBasket} /> </Route>
                    <Route path="/news" ><SortNew add={addProductToBasket} /> </Route>
                    <Route path="/basket" ><Basket items={basket} remove={removeFromProductToBasket} add={addProductToBasket}/> </Route>
                </Switch>
                <Footer/>
            </Router>
    )
}
export {Main}
