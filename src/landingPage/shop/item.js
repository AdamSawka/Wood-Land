import React from "react";
import {ItemsId} from "./itemsAll";


const Item = ({name, img, price}) => {


    return <>
        <section className="py-5 item-shop">
            <div className="col mb-5">
                <img alt='deer' className="card-img-top image-shop" src={img}
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
                    <div className="text-center">
                        <ItemsId.Consumer>
                            {
                                ({itemId, setItemId})=>(
                                    <button onClick={setItemId}  className="btn btn-outline-dark mt-auto" >Dodaj
                                        do koszyka
                                    </button>
                                )
                            }
                        </ItemsId.Consumer>
                    </div>
                </div>
            </div>
        </section>

    </>
}
export {Item};