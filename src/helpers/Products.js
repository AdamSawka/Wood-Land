import {useEffect, useState} from "react";
const API_URL = 'http://localhost:3000';

const Products = () =>{
const [product, setProduct] = useState([]);

useEffect(() => {

    fetch(`${API_URL}/products`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data);
        });

}, []);

return product
}
export {Products}