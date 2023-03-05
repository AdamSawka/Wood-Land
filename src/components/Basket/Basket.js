import React from "react";
import {Item} from "../../pages/shop/item";
import {Products} from "../../helpers/Products";


const Basket = ({items, remove})=>{
    const products = Products()
    const Sorted = items.map(item=> products.filter(element => element.id === item))
   const SortedArray = Sorted.flat()

    return<>
        {SortedArray.length > 0
            ? <div className=" row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center margin-top">
                {SortedArray.map(item =>(
                    <Item add={remove}  name={item.name} img={item.img} price={item.price} id={item.id} />
                ))}
            </div>
            : <div className="vh-100 d-flex align-items-center justify-content-center"><h1>Koszyk jest pusty</h1></div>

        }


    </>
}
export {Basket}