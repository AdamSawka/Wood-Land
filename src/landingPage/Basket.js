import React from "react";
import {Item} from "./shop/item";
import {Products} from "../components/Products";


const Basket = ({items, add})=>{
    const products = Products()
    const SortedArray = items.map(item=> products.filter(element => element.id === item))

    return<>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center margin-top">
            {SortedArray.map(item =>(
                <Item add={add}  name={item.name} img={item.img} price={item.price} id={item.id} />
            ))}
        </div>
    </>
}
export {Basket}