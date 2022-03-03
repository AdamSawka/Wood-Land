import React from "react";
import {Link} from "react-router-dom";


const Item = ({name, img, price, id}) => {
    return <>
        <section className="py-5">
                    <div className="col mb-5">
                        <img alt='deer'  className="card-img-top" src={`../../img/${img}`}
                            />
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{name}</h5>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                </div>
                                {price} PLN
                            </div>
                        </div>
                        <div className="card-footer ">
                            <div className="text-center"><Link className="btn btn-outline-dark mt-auto" name={id}>Dodaj
                                do koszyka</Link></div>
                        </div>
                    </div>
        </section>

    </>
}
export {Item};