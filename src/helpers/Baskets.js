import {useEffect, useState} from "react";
const API_URL = 'http://localhost:3000';

const Baskets = () =>{
    const [basket, setBasket] = useState([]);

    useEffect(() => {

        fetch(`${API_URL}/baskets`)
            .then((response) => response.json())
            .then((data) => {
                setBasket(data);
            });

    }, []);

    return basket
}
export {Baskets}