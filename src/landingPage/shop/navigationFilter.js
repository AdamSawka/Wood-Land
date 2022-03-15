import React from "react";

const NavigationFilter = () => {

    return <>
        <div className="col-sm-4 col-md-2 col-lg-2 col-xl-2 vh-100 ">
            <div className="d-flex flex-column align-items-center h-100 justify-content-center">
                <p>Sortuj według:</p>
                <div>
                    <label className="mx-2" htmlFor="price">Cena</label>
                    <input type="checkbox" id="price" name="price"/>
                </div>

                <p className="mt-4 mb-1">Rodzaj</p>

                <div>
                    <label className="mx-2" htmlFor="pillow">Poduszki</label>
                    <input type="checkbox" id="pillow" name="pillow"/>
                </div>

                <div>
                    <label className="mx-2" htmlFor="image">Obrazy</label>
                    <input type="checkbox" id="image" name="image"/>
                </div>

                <div>
                    <label className="mx-2" htmlFor="decoration">Ozdoby</label>
                    <input type="checkbox" id="decoration" name="decoration"/>
                </div>

                <div>
                    <label className="mx-2" htmlFor="tshirt">Koszulki</label>
                    <input type="checkbox" id="tshirt" name="tshirt"/>
                </div>

                <div>
                    <label className="mx-2" htmlFor="poster">Plakaty</label>
                    <input type="checkbox" id="poster" name="poster"/>
                </div>

            </div>
        </div>
    </>
}
export {NavigationFilter}