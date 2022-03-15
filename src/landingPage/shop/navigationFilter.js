import React from "react";

const NavigationFilter = () => {

    return <>
        <div>
            <p>Sortuj według:</p>
                 <input type="checkbox" id="price" name="price"/>
                <label htmlFor="price">Cena</label>
            <p>Rodzaj</p>
            <input type="checkbox" id="pillow" name="pillow"/>
                <label htmlFor="pillow">Poduszki</label>
            <input type="checkbox" id="image" name="image"/>
                <label htmlFor="image">Obrazy</label>
            <input type="checkbox" id="decoration" name="decoration"/>
                <label htmlFor="decoration">Ozdoby</label>
            <input type="checkbox" id="tshirt" name="tshirt"/>
                <label htmlFor="tshirt">Koszulki</label>
            <input type="checkbox" id="poster" name="poster"/>
                <label htmlFor="poster">Plakaty</label>
        </div>
    </>
}
export {NavigationFilter}