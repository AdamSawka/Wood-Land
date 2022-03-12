import React from "react";
import {Products} from "../../components/Products.js";
import {Item} from "./item";

const SortType = ({typeElement, add}) => {
    const products = Products()
    const SortedArray =products.filter(element => element.type === typeElement)

    return<>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center margin-top">
            {SortedArray.map(item =>(
                <Item add={add} name={item.name} img={item.img} price={item.price} id={item.id} />
            ))}
        </div>
    </>
}
 const SortPopular =({add})=>{
     const products = Products()
     const SortedArray =products.filter(element => element.popular === true)
     return<>
         <div className="container-shop">
             <h1 className="d-block margin-top w-100 pt-3 text-center">Popularne produkty</h1>
         <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center ">
             {SortedArray.map(item =>(
                 <Item add={add} name={item.name} img={item.img} price={item.price} id={item.id} />
             ))}
         </div>
         </div>
     </>

 }
 const SortNew =({add})=>{
     const products = Products()
     const SortedArray =products.filter(element => element.isNew === true)
     return<>
         <div className="container-shop">
             <h1 className="d-block margin-top w-100 pt-3 text-center">Nowa kolekcja</h1>
         <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center ">
             {SortedArray.map(item =>(
                 <Item add={add} name={item.name} img={item.img} price={item.price} id={item.id} />
             ))}
         </div>
         </div>
     </>

 }

export {SortType, SortPopular, SortNew};