import React from "react";
import {Item} from "./item";
import {products} from "../../components/db";

export const ItemsId = React.createContext({
    itemId: [],
    setItemId: () => {
    }
})

const ItemsAll = () => {

    return <>
        <div className="container">
            <h1 className="d-block margin-top w-100 pt-3 text-center">Wszystkie produkty</h1>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center">
            {products.map( item =>(
                <Item name={item.name} img={item.img} price={item.price} id={item.id} />
            ))}
        </div>
        </div>
    </>
}
export {ItemsAll};