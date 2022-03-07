import React from "react";
import {products} from "../../components/db";
import {Item} from "./item";

const Sort = ({typeElement}) => {

    const SortedArray =products.filter(element => element.type === typeElement)
    return<>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center margin-top">
            {SortedArray.map(item =>(
                <Item name={item.name} img={item.img} price={item.price} id={item.id} />
            ))}
        </div>
    </>
}
export {Sort};