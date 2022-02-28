import React from "react";

const Item = ({name, img, price, id}) => {
    return <>
        <section className="py-5">
                    <div className="col mb-5">
                        <img className="card-img-top" src={`../../img/${img}`}
                             alt="..."/>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{name}</h5>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                </div>
                                {price} PLN
                            </div>
                        </div>
                        <div className="card-footer ">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" name={id}>Dodaj
                                do koszyka</a></div>
                        </div>
                    </div>
        </section>

    </>
}
export {Item};