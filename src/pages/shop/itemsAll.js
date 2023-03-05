import React from 'react';
import {Item} from "./item";
import {Products} from "../../helpers/Products.js";
import {NavigationFilter} from "../../components/Navigation/NavigationFilter";

const ItemsAll = ({add}) => {
    const products = Products()

    return <>
                <div className="container d-flex row w-100 mx-auto ">
                    <NavigationFilter />
                    <div className=" col-sm-8 col-md-9 col-lg-10 col-xl-10">
                    <h1 className="d-block margin-top w-100 pt-3 text-center">Wszystkie produkty</h1>
                    <div className="row gx-4 gx-lg-5  row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center">
                        {    products.map( item =>(
                        <Item add={add} id={item.id}  key={item.id} name={item.name} img={item.img} price={item.price}  />
                        ))}
                    </div>
                    </div>
                </div>
            </>
}
export {ItemsAll}
