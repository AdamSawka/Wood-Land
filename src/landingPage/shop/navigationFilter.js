import React from "react";

const NavigationFilter = () => {

    return <>
        <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2 vh-100 ">
            <div className="d-flex flex-column align-items-center  h-100 justify-content-center">
                <p className="border-bottom">Sortuj według:</p>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <label className="mx-4" htmlFor="price">Cena</label>
                    <input className="" type="checkbox" id="price" name="price"/>
                </div>

                <p className="mt-4 mb-2 border-bottom">Rodzaj:</p>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <label className="mx-4" htmlFor="pillow">Poduszki</label>
                    <input type="checkbox" id="pillow" name="pillow"/>
                </div>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <label className="mx-4" htmlFor="image">Obrazy</label>
                    <input type="checkbox" id="image" name="image"/>
                </div>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <label className="mx-4" htmlFor="decoration">Ozdoby</label>
                    <input type="checkbox" id="decoration" name="decoration"/>
                </div>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <label className="mx-4" htmlFor="tshirt">Koszulki</label>
                    <input type="checkbox" id="tshirt" name="tshirt"/>
                </div>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <label className="mx-4" htmlFor="poster">Plakaty</label>
                    <input type="checkbox" id="poster" name="poster"/>
                </div>

            </div>
        </div>
    </>
}
export {NavigationFilter}