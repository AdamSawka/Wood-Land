import React from "react";
import {Item} from "./item";
import {products} from "../../components/db";

export const ItemsId = React.createContext({
    itemId: [],
    setItemId: () => {}
})

const ItemsAll = () => {

    return <>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center margin-top">
                <Item name={products[0].name} img={products[0].img} price={products[0].price} id={products[0].id}/>
                <Item name={products[1].name} img={products[1].img} price={products[1].price} id={products[1].id}/>
                <Item name={products[2].name} img={products[2].img} price={products[2].price} id={products[2].id}/>
                <Item name={products[3].name} img={products[3].img} price={products[3].price} id={products[3].id}/>
                <Item name={products[4].name} img={products[4].img} price={products[4].price} id={products[4].id}/>
                <Item name={products[5].name} img={products[5].img} price={products[5].price} id={products[5].id}/>
                <Item name={products[6].name} img={products[6].img} price={products[6].price} id={products[6].id}/>
                <Item name={products[7].name} img={products[7].img} price={products[7].price} id={products[7].id}/>
                <Item name={products[8].name} img={products[8].img} price={products[8].price} id={products[8].id}/>
                <Item name={products[9].name} img={products[9].img} price={products[9].price} id={products[9].id}/>
                </div>
            </>
            }
            export {ItemsAll};