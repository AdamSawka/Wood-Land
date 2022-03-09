import React, {useEffect, useState} from 'react';
import {Item} from "./item";

const API_URL = 'http://localhost:3000';

const ItemsAll = ({add}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/products`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });

    }, []);
    if (loading) return <p>Trwa ładowanie...</p>;
    if (products.length === 0) return null;


    return <>
                <div className="container">
                    <h1 className="d-block margin-top w-100 pt-3 text-center">Wszystkie produkty</h1>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 mx-1 justify-content-center">
                        {    products.map( item =>(
                        <Item add={add} id={item.id}  key={item.id} name={item.name} img={item.img} price={item.price}  />
                        ))}
                    </div>
                </div>
            </>
}
export {ItemsAll}
